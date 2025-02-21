import { useState } from 'react';

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
