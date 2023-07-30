import { API } from '@core/data/fetcher';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

const SEND_EMAIL_QUERY_KEY = ['set', 'new', 'password'];

type MutationInput = {
  password: string;
};

type MutationResponse = {
  message: string;
};
type MutationError = MutationResponse;

export const useSetNewPasswordMutation = (
  options?: Omit<UseMutationOptions<MutationResponse, MutationError, MutationInput, unknown>, 'mutationKey' | 'mutationFn'>,
) => {
  return useMutation({
    mutationKey: SEND_EMAIL_QUERY_KEY,
    mutationFn: async (body: MutationInput) => {
      const res = await API.post('/user/set_new_password', { body: JSON.stringify(body) });
      return res.json<MutationResponse>();
    },
    ...options,
  });
};
