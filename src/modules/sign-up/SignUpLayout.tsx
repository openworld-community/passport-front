import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import TelegramIcon from '@mui/icons-material/Telegram';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
export const SignUpLayout = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: null,
      discordId: '',
      telegramId: '',
    },
    onSubmit: () => {
      console.log('123');
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3).max(256).required('Name is required!'),
      email: Yup.string().required('Email is required!').email('Email is invalid!'),
      password: Yup.string().min(5).max(10).required('Password is required!'),
      confirmPassword: Yup.string()
        .nullable()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match!')
        .required('Password confirmation is required!'),
      discordId: Yup.string().min(3).max(256).required('Discord ID is required!'),
      telegramId: Yup.string().min(3).max(256).required('Telegram ID is required!'),
    }),
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: '50px' }}
    >
      <Typography style={{ display: 'flex', alignItems: 'center', columnGap: '30px', marginBottom: '30px' }}>
        Name
        <TextField
          style={{ width: '300px' }}
          placeholder="Type your name"
          type="text"
          variant="outlined"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.errors.name}
          error={!!formik.errors.name}
          InputProps={{
            startAdornment: <PersonIcon style={{ paddingRight: '5px' }} />,
          }}
        />
      </Typography>
      <Typography style={{ display: 'flex', alignItems: 'center', columnGap: '30px', marginBottom: '30px' }}>
        Email
        <TextField
          type="email"
          placeholder="Type your email"
          variant="outlined"
          style={{ width: '300px' }}
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
      </Typography>
      <Typography style={{ display: 'flex', alignItems: 'center', columnGap: '30px', marginBottom: '30px' }}>
        Password
        <TextField
          placeholder="******"
          variant="outlined"
          type="password"
          style={{ width: '300px' }}
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
      </Typography>
      <Typography style={{ display: 'flex', alignItems: 'center', columnGap: '30px', marginBottom: '30px' }}>
        Confirm Pass
        <TextField
          placeholder="******"
          variant="outlined"
          type="confirmPassword"
          style={{ width: '300px' }}
          name="password"
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
      </Typography>
      <Typography style={{ display: 'flex', alignItems: 'center', columnGap: '30px', marginBottom: '30px' }}>
        Discord ID
        <TextField
          type="text"
          placeholder="Type your Discord username"
          variant="outlined"
          style={{ width: '300px' }}
          name="email"
          value={formik.values.discordId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.discordId}
          helperText={formik.errors.discordId}
          InputProps={{
            startAdornment: (
              <svg viewBox="0 0 48 48" width="24px" height="24px" style={{ paddingRight: '5px' }}>
                <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z" />
              </svg>
            ),
          }}
        />
      </Typography>
      <Typography style={{ display: 'flex', alignItems: 'center', columnGap: '30px', marginBottom: '30px' }}>
        Telegram ID
        <TextField
          type="text"
          placeholder="Type your Telegram username"
          variant="outlined"
          style={{ width: '300px' }}
          name="email"
          value={formik.values.telegramId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.telegramId}
          helperText={formik.errors.telegramId}
          InputProps={{
            startAdornment: <TelegramIcon style={{ paddingRight: '5px' }} />,
          }}
        />
      </Typography>
      <Button type="submit" variant="contained" style={{ width: '150px', alignSelf: 'center' }}>
        Sign in
      </Button>
      <Stack direction="row" spacing={1} style={{ marginTop: '30px', alignSelf: 'center' }}>
        <Button variant="outlined">
          {
            <svg viewBox="0 0 48 48" width="24px" height="24px">
              <path
                fill="#556cd6"
                d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"
              />
            </svg>
          }
        </Button>
        <Button variant="outlined">{<TelegramIcon />}</Button>
      </Stack>
    </form>
  );
};
