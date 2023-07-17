import { LoginRequest, LoginResponse } from '@core/contracts';
import { API } from '@core/data/fetcher';
import { LS, LSKeys } from '@core/local-store';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HttpsIcon from '@mui/icons-material/Https';
import TelegramIcon from '@mui/icons-material/Telegram';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Box, Button, IconButton, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import { useMutation } from '@tanstack/react-query';
import { LoadingButton } from '@ui/LoadingButton';
import { TextInput } from '@ui/fields/TextInput';
import { DiscordIcon } from '@ui/icons/DiscordIcon';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

export const LoginLayout = () => {
  const mutation = useMutation({
    mutationFn: (data: LoginRequest) => {
      return API.post('login', {
        json: data,
      }).json<LoginResponse>();
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: values => {
      mutation.mutate({
        password: values.password,
        login: values.login,
      });
    },
    validationSchema: Yup.object({
      login: Yup.string().required('Email/Username is required!'),
      password: Yup.string().required('Password is required!'),
    }),
  });

  useEffect(() => {
    if (mutation.data?.token) {
      LS.setItem(LSKeys.AuthInfo, mutation.data.token);
    }
  }, [mutation.data]);

  return (
    <>
      {mutation.isError ? (
        <Alert severity="error" sx={{ marginBottom: '1rem' }}>
          Invalid email or password
        </Alert>
      ) : null}
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        alignContent="center"
        flexWrap="wrap"
        onSubmit={formik.handleSubmit}
      >
        <TextInput
          label="Email/Username"
          placeholder="Type your email or username"
          variant="outlined"
          name="login"
          value={formik.values.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.login}
          helperText={formik.errors.login}
          InputProps={{
            startAdornment: <AlternateEmailIcon sx={{ paddingRight: '5px' }} />,
          }}
        />
        <TextInput
          label="Password"
          placeholder="******"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.password}
          helperText={formik.errors.password}
          InputProps={{
            startAdornment: <HttpsIcon sx={{ paddingRight: '5px' }} />,
            endAdornment: (
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
        <Stack
          sx={{
            alignSelf: 'flex-end',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            width: '280px',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <Link href="/password-forget" sx={{ fontSize: '0.75rem' }}>
            Forgot your password?
          </Link>
        </Stack>
        <LoadingButton
          type="submit"
          variant="contained"
          disabled={mutation.isLoading}
          loading={mutation.isLoading}
          sx={{ width: '150px', alignSelf: 'center', marginTop: '20px' }}
        >
          Sign in
        </LoadingButton>
        <Stack direction="row" spacing={1} sx={{ marginTop: '30px', alignSelf: 'center' }}>
          <Button variant="outlined">{<DiscordIcon fill={'#556cd6'} />}</Button>
          <Button variant="outlined">{<TelegramIcon />}</Button>
        </Stack>
      </Box>
    </>
  );
};
