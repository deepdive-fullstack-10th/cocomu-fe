import { useMutation } from '@tanstack/react-query';
import ideApi from '@api/domain/ide';

export function useTabRun() {
  const ideRun = useMutation({
    mutationFn: ideApi.codeRun,
  });

  return { ideRun };
}

export function useCodeSubmit() {
  const ideSubmit = useMutation({
    mutationFn: ideApi.codeSubmit,
  });

  return { ideSubmit };
}
