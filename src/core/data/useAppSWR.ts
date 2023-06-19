import useSWR from 'swr';
import { fetcher } from './fetcher';

const API_URL = import.meta.env.VITE_API_URL || 'TO_DO';

type DataResponse<T> = {
  data?: T;
  isLoading: boolean;
  error: unknown;
};

export const useAppSWR = <T>(url: string): DataResponse<T> => {
  const { data, error, isLoading } = useSWR<T>(API_URL + url, fetcher);
  return {
    data,
    isLoading,
    error,
  };
};
