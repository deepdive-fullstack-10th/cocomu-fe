import { ChangeEvent, FormEvent, useState } from 'react';

interface UseFieldErrors<T> {
  errors: Partial<Record<keyof T, string>>;
  setError: (field: keyof T, message: string) => void;
  clearError: (field: keyof T) => void;
  clearAllErrors: () => void;
  hasErrors: boolean;
}

export function useFieldErrors<T>(): UseFieldErrors<T> {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const setError = (field: keyof T, message: string) => {
    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const clearError = (field: keyof T) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const clearAllErrors = () => {
    setErrors({});
  };

  return {
    errors,
    setError,
    clearError,
    clearAllErrors,
    hasErrors: Object.keys(errors).length > 0,
  };
}

interface UseFormProps<T> {
  initialValues: T;
  validationRules: ValidationRules;
}

export function useForm<T>({ initialValues, validationRules }: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const { errors, setError, clearError, clearAllErrors, hasErrors } = useFieldErrors<T>();

  const validateField = (field: keyof T, value: string, validationType: keyof FieldValidator) => {
    const validator = validationRules[field]?.[validationType];
    if (!validator) return true;

    const result = validator(value);
    if (!result.isValid) {
      setError(field, result.message!);
      return false;
    }

    clearError(field);
    return true;
  };

  const register = (field: keyof T) => ({
    name: field,
    value: values[field],
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValues((prev) => ({ ...prev, [field]: value }));
      validateField(field, value, 'onChange');
    },
    onBlur: (e: ChangeEvent<HTMLInputElement>) => {
      validateField(field, e.target.value, 'onBlur');
    },
  });

  const handleSubmit = (onSubmit: (data: T) => Promise<void>) => async (e: FormEvent) => {
    e.preventDefault();
    clearAllErrors();

    let isValid = true;
    for (const field in validationRules) {
      const valid = validateField(field as keyof T, String(values[field as keyof T]), 'onSubmit');
      if (!valid) isValid = false;
    }

    if (isValid && !hasErrors) {
      try {
        await onSubmit(values);
      } catch (error) {
        if (error instanceof ApiError) {
          setError(error.field as keyof T, error.message);
        }
      }
    }
  };

  return {
    values,
    errors,
    register,
    handleSubmit,
    setError,
    clearError,
    clearAllErrors,
    hasErrors,
  };
}

const LoginForm = () => {
  const validationRules: ValidationRules = {
    email: {
      onBlur: (value) => {
        if (!value.includes('@')) {
          return ValidationResult.failure('올바른 이메일 형식이 아닙니다.');
        }
        return ValidationResult.success();
      },
    },
    password: {
      onSubmit: (value) => {
        if (value.length < 8) {
          return ValidationResult.failure('비밀번호는 8자 이상이어야 합니다.');
        }
        return ValidationResult.success();
      },
    },
  };

  const form = useForm({
    initialValues: { email: '', password: '' },
    validationRules,
  });
};
