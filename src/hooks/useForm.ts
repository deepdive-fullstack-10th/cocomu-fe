import { ChangeEvent, FormEvent, useState, useCallback } from 'react';
import { FieldValidator, ValidationRules } from '@utils/validation';
import { useFieldErrors } from '@hooks/useError';

interface UseFormProps<T extends Record<string, string>> {
  initialValues: T;
  validationRules: ValidationRules;
  onSubmitSuccess?: () => void;
  onSubmitError?: (error: string) => void;
}

interface FormField {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
}

export function useForm<T extends Record<string, string>>({
  initialValues,
  validationRules,
  onSubmitSuccess,
  onSubmitError,
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [touched, setTouched] = useState<Record<keyof T, boolean>>({} as Record<keyof T, boolean>);
  const { errors, setError, clearError, clearAllErrors, hasErrors } = useFieldErrors<T>();

  const validateField = useCallback(
    (field: keyof T, value: string, validationType: keyof FieldValidator): boolean => {
      const fieldValidator = validationRules[field as string];
      const validator = fieldValidator?.[validationType];

      if (!validator) return true;

      const result = validator(value);
      if (!result.isValid) {
        setError(field, result.message || 'Invalid value');
        return false;
      }

      clearError(field);
      return true;
    },
    [validationRules, setError, clearError],
  );

  const setFieldValue = useCallback(
    (field: keyof T, value: string) => {
      setValues((prev) => ({ ...prev, [field]: value }));
      validateField(field, String(value), 'onChange');
    },
    [validateField],
  );

  const setFieldTouched = useCallback((field: keyof T, isTouched: boolean = true) => {
    setTouched((prev) => ({ ...prev, [field]: isTouched }));
  }, []);

  const register = useCallback(
    (field: keyof T): FormField => ({
      name: field as string,
      value: values[field],
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFieldValue(field, value);
      },
      onBlur: (e: ChangeEvent<HTMLInputElement>) => {
        setFieldTouched(field);
        validateField(field, e.target.value, 'onBlur');
      },
      error: errors[field],
      touched: touched[field],
    }),
    [values, errors, touched, setFieldValue, setFieldTouched, validateField],
  );

  const validateForm = useCallback((): boolean => {
    const fields = Object.keys(validationRules) as Array<keyof T>;

    return fields.every((field) => {
      const valid = validateField(field, values[field], 'onSubmit');
      setFieldTouched(field);
      return valid;
    });
  }, [validationRules, values, validateField, setFieldTouched]);

  const handleSubmit = useCallback(
    (onSubmit: (data: T) => Promise<void>) => async (e: FormEvent) => {
      e.preventDefault();
      clearAllErrors();

      const isValid = validateForm();

      if (isValid && !hasErrors) {
        try {
          await onSubmit(values);
          onSubmitSuccess?.();
        } catch (error) {
          if (error instanceof Error && 'field' in error) {
            setError(error.field as keyof T, error.message);
          }
          onSubmitError?.(error);
        }
      }
    },
    [values, hasErrors, clearAllErrors, validateForm, setError],
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setTouched({} as Record<keyof T, boolean>);
    clearAllErrors();
  }, [initialValues, clearAllErrors]);

  return {
    values,
    errors,
    touched,
    register,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    setError,
    clearError,
    clearAllErrors,
    hasErrors,
    reset,
    validateForm,
  };
}
