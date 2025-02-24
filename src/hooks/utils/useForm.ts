import { useState, ComponentPropsWithRef, FormEventHandler } from 'react';
import { useError } from '@hooks/utils/useError';
import ValidationError from '@utils/errors/ValidationError';

interface UseFormProps<T extends Record<string, string>> {
  initialValues: T;
}

interface RegisterOptions extends ComponentPropsWithRef<'input'> {
  validate?: {
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
  };
  formatter?: (value: string) => string;
}

export function useForm<TFieldData extends Record<string, string>>({ initialValues }: UseFormProps<TFieldData>) {
  const [formData, setFormData] = useState<TFieldData>(initialValues);
  const { errors, setError, clearError, clearAllErrors } = useError<Record<keyof TFieldData, string>>();

  const validateAndSetErrors = ({
    value,
    validate,
    inputName,
  }: {
    value: string;
    validate: (data: string) => void;
    inputName: keyof TFieldData;
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

  const register = (inputName: keyof TFieldData, options: RegisterOptions = {} as RegisterOptions) => {
    const { validate, formatter } = options;
    const eventHandlers = {} as Pick<RegisterOptions, 'onChange' | 'onBlur'>;

    eventHandlers.onChange = (e) => {
      options.onChange?.(e);

      const { name, value } = e.target;
      if (validate?.onChange) {
        validateAndSetErrors({ value, validate: validate.onChange, inputName: name });
      }

      setFormData((prev) => ({ ...prev, [name]: formatter ? formatter(value) : value }));
    };

    eventHandlers.onBlur = (e) => {
      options.onBlur?.(e);

      const { name, value } = e.target;
      if (validate?.onBlur) {
        validateAndSetErrors({ value, validate: validate.onBlur, inputName: name });
      }
    };

    return {
      ...options,
      name: inputName,
      value: formData[inputName],
      error: errors[inputName],
      onChange: eventHandlers.onChange,
      onBlur: eventHandlers.onBlur,
    };
  };

  return {
    formData,
    errors,
    register,
    handleSubmit,
  };
}
