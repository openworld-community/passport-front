import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HttpsIcon from '@mui/icons-material/Https';
import TelegramIcon from '@mui/icons-material/Telegram';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export const LoginLayout = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log('onSubmit', values);
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required!'),
      password: Yup.string().required('Password is required!'),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography display={'flex'} alignItems={'center'} columnGap={'30px'} marginBottom={'30px'} marginLeft={'30px'}>
        Email
        <TextField
          style={{ width: '300px' }}
          variant="outlined"
          placeholder="Type your email"
          type="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            ),
          }}
          name="email"
          helperText={formik.errors.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.email}
        />
      </Typography>
      <Typography display={'flex'} alignItems={'center'} columnGap={'30px'}>
        Password
        <TextField
          style={{ width: '300px' }}
          placeholder="Password"
          variant="outlined"
          name="password"
          helperText={formik.errors.password}
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HttpsIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
      </Typography>
      <Link href="/password-forget">Forgot your password?</Link>
      <FormControlLabel style={{ margin: '20px 0' }} control={<Checkbox />} label="Remember me" />
      <Button type="submit" variant="contained" style={{ width: '150px' }}>
        Sign in
      </Button>
      <Stack direction="row" spacing={1} marginTop={'30px'}>
        <Button variant="outlined">
          {
            <svg viewBox="0 0 48 48" width="24px" height="24px">
              <path
                fill="#556cd7"
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
