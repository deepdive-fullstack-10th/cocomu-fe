import { useState, ComponentProps, FormEventHandler, ChangeEvent, FocusEvent } from 'react';
import { useError } from '@hooks/utils/useError';
import ValidationError from '@utils/errors/ValidationError';

interface UseFormProps<T extends Record<string, string | number[]>> {
  initialValues: T;
}

interface RegisterOptions<T> extends ComponentProps<'input'> {
  validate?: {
    onChange?: (value: T) => void;
    onBlur?: (value: T) => void;
  };
}

export function useForm<TFieldData extends Record<string, string | number[]>>({
  initialValues,
}: UseFormProps<TFieldData>) {
  const [formData, setFormData] = useState<TFieldData>(initialValues);
  const { errors, setError, clearError, clearAllErrors, hasErrors } = useError<Record<keyof TFieldData, string>>();

  const validateAndSetErrors = <T extends keyof TFieldData>({
    value,
    validate,
    inputName,
  }: {
    value: TFieldData[T];
    validate: (data: TFieldData[T]) => void;
    inputName: T;
  }) => {
    try {
      validate(value);
      clearError(inputName);
      return true;
    } catch (err) {
      if (err instanceof ValidationError) {
        setError(inputName, err.message);
      }
      return false;
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => async (callback: () => Promise<void>) => {
    e.preventDefault();
    if (Object.values(errors).length > 0) return;

    clearAllErrors();
    await callback();
  };

  const updateFormData = <T extends keyof TFieldData>(inputName: T, value: TFieldData[T]) => {
    setFormData((prev) => ({
      ...prev,
      [inputName]: value,
    }));
  };

  const register = <T extends keyof TFieldData>(
    inputName: T,
    options: RegisterOptions<Extract<TFieldData[T], string>> = {},
  ) => {
    const { validate, onChange, onBlur } = options;

    return {
      ...options,
      name: inputName,
      value: formData[inputName] as string,
      error: errors[inputName],
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
        const newValue = e.target.value as Extract<TFieldData[T], string>;

        if (validate?.onChange) {
          validateAndSetErrors({ value: newValue, validate: validate.onChange, inputName });
        }

        updateFormData(inputName, newValue);
      },
      onBlur: (e: FocusEvent<HTMLInputElement>) => {
        onBlur?.(e);
        const newValue = e.target.value as Extract<TFieldData[T], string>;

        if (validate?.onBlur) {
          validateAndSetErrors({ value: newValue, validate: validate.onBlur, inputName });
        }
      },
    };
  };

  const registerSelect = <T extends keyof TFieldData>(
    inputName: T,
    options: { validate?: (data: TFieldData[T]) => void } = {},
  ) => ({
    name: inputName,
    values: formData[inputName] as number[],
    error: errors[inputName],
    onSelect: (newValues: number[]) => {
      updateFormData(inputName, newValues as TFieldData[T]);
      if (options.validate) {
        validateAndSetErrors({
          value: newValues as TFieldData[T],
          validate: options.validate,
          inputName,
        });
      }
    },
    onBlur: () => {
      if (options.validate) {
        validateAndSetErrors({
          value: formData[inputName],
          validate: options.validate,
          inputName,
        });
      }
    },
  });

  return {
    formData,
    errors,
    register,
    registerSelect,
    handleSubmit,
    hasErrors,
  };
}
