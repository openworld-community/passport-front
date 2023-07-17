import { LoginResponse } from '@core/contracts';
import { LS, LSKeys } from '@core/local-store';
import ky from 'ky';

const { access_token, refresh_token } = LS.getItem(LSKeys.AuthInfo, null) ?? {};

export const API = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL,
  headers: access_token
    ? {
        Authorization: `Bearer ${access_token}`,
      }
    : {},
  hooks: {
    afterResponse: [
      async (request, _options, response) => {
        if (response.status === 403) {
          // Get a fresh token
          const { token } = await API.post('refreshtoken', {
            json: {
              refresh_token,
            },
          }).json<LoginResponse>();

          LS.setItem(LSKeys.AuthInfo, token);

          request.headers.set('Authorization', `Bearer ${token.access_token}`);

          return ky(request);
        }
      },
    ],
  },
});
