import { RegisterRequest } from '@core/contracts';
import { API } from '@core/data/fetcher';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import TelegramIcon from '@mui/icons-material/Telegram';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Box } from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { Stack } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { LoadingButton } from '@ui/LoadingButton';
import { TextInput } from '@ui/fields/TextInput';
import { DiscordIcon } from '@ui/icons/DiscordIcon';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export const SignUpLayout = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: RegisterRequest) => {
      return API.post('register', {
        json: data,
      }).json();
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const formik = useFormik({
    initialValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      discordId: '',
      telegramId: '',
    },
    onSubmit: values => {
      mutation.mutate({
        discord: values.discordId,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
        telegram: values.telegramId,
        username: values.username,
      });
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3).max(256).required('Username is required!'),
      firstName: Yup.string().min(3).max(256).required('First name is required!'),
      lastName: Yup.string().min(3).max(256).required('Last name is required!'),
      email: Yup.string().required('Email is required!').email('Email is invalid!'),
      password: Yup.string().min(5).max(10).required('Password is required!'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match!')
        .required('Password confirmation is required!'),
      discordId: Yup.string().min(3).max(256).required('Discord ID is required!'),
      telegramId: Yup.string().min(3).max(256).required('Telegram ID is required!'),
    }),
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      navigate('/login');
    }
  }, [mutation.isSuccess, navigate]);

  return (
    <>
      {mutation.isError ? (
        <Alert severity="error" sx={{ marginBottom: '1rem' }}>
          Fail to create a new user account
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
          label="Username"
          placeholder="Type your username"
          variant="outlined"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.errors.username}
          error={!!formik.errors.username}
          InputProps={{
            startAdornment: <PersonIcon style={{ paddingRight: '5px' }} />,
          }}
        />
        <TextInput
          label="First name"
          placeholder="Type your first name"
          variant="outlined"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.errors.firstName}
          error={!!formik.errors.firstName}
          InputProps={{
            startAdornment: <PersonIcon style={{ paddingRight: '5px' }} />,
          }}
        />
        <TextInput
          label="Last name"
          placeholder="Type your last name"
          variant="outlined"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.errors.lastName}
          error={!!formik.errors.lastName}
          InputProps={{
            startAdornment: <PersonIcon style={{ paddingRight: '5px' }} />,
          }}
        />
        <TextInput
          label="Email"
          type="email"
          placeholder="Type your email"
          variant="outlined"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.email}
          helperText={formik.errors.email}
          InputProps={{
            startAdornment: <AlternateEmailIcon style={{ paddingRight: '5px' }} />,
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
            startAdornment: <HttpsIcon style={{ paddingRight: '5px' }} />,
            endAdornment: (
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
        <TextInput
          label="Confirm Pass"
          placeholder="******"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.confirmPassword}
          helperText={formik.errors.confirmPassword}
          InputProps={{
            startAdornment: <HttpsIcon style={{ paddingRight: '5px' }} />,
            endAdornment: (
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
        <TextInput
          label="Discord ID"
          placeholder="Type your Discord username"
          variant="outlined"
          name="discordId"
          value={formik.values.discordId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.discordId}
          helperText={formik.errors.discordId}
          InputProps={{
            startAdornment: <DiscordIcon style={{ paddingRight: '5px' }} />,
          }}
        />
        <TextInput
          label="Telegram ID"
          placeholder="Type your Telegram username"
          variant="outlined"
          name="telegramId"
          value={formik.values.telegramId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.telegramId}
          helperText={formik.errors.telegramId}
          InputProps={{
            startAdornment: <TelegramIcon style={{ paddingRight: '5px' }} />,
          }}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          disabled={mutation.isLoading}
          loading={mutation.isLoading}
          sx={{ width: '150px', alignSelf: 'center', marginTop: '20px' }}
        >
          Sign up
        </LoadingButton>
        <Stack direction="row" spacing={1} style={{ marginTop: '30px', alignSelf: 'center' }}>
          <Button variant="outlined">{<DiscordIcon fill={'#556cd6'} />}</Button>
          <Button variant="outlined">{<TelegramIcon />}</Button>
        </Stack>
      </Box>
    </>
  );
};
