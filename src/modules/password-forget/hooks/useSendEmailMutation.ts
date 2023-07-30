import { API } from '@core/data/fetcher';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

const SEND_EMAIL_QUERY_KEY = ['send', 'reset', 'email'];

type MutationInput = {
  login: string;
};

type MutationResponse = {
  message: string;
};

type MutationError = MutationResponse;

export const useSendEmailMutation = (
  options?: Omit<UseMutationOptions<MutationResponse, MutationError, MutationInput, unknown>, 'mutationKey' | 'mutationFn'>,
) => {
  return useMutation(
    SEND_EMAIL_QUERY_KEY,
    async (body: MutationInput) => {
      const res = await API.post('/user/reset_password', { body: JSON.stringify(body) })
      return res.json<MutationResponse>()
    },
    options,
  );
};
