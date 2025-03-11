import { useCallback, useEffect, useRef, useState } from 'react';
import { FetchNextPageOptions, UseInfiniteQueryResult } from '@tanstack/react-query';
import { useToastStore } from '@stores/useToastStore';

interface useScrollProps {
  nextPage: boolean;
  fetchingNextPage: boolean;
  fetchNext: (options?: FetchNextPageOptions) => Promise<UseInfiniteQueryResult>;
  thresholdRate?: number;
  delayTime?: number;
}

export default function useScroll({
  nextPage,
  fetchingNextPage,
  fetchNext,
  thresholdRate = 0.1,
  delayTime = 500,
}: useScrollProps) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const observerRef = useRef<HTMLDivElement>(null);
  const { error } = useToastStore();

  const nextList = useCallback(async () => {
    if (isFetching || !nextPage || fetchingNextPage) return;

    try {
      setIsFetching(true);
      await fetchNext();
    } catch (e) {
      error(e);
    } finally {
      setTimeout(() => {
        setIsFetching(false);
      }, delayTime);
    }
  }, [nextPage, isFetching, fetchingNextPage, fetchNext, delayTime, error]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPage && !fetchingNextPage) {
          nextList().catch((e) => {
            error(e);
          });
        }
      },
      { threshold: thresholdRate },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [nextPage, fetchingNextPage, nextList, thresholdRate, error]);

  return {
    observerRef,
    isFetching,
  };
}
