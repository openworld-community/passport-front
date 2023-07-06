import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HttpsIcon from '@mui/icons-material/Https';
import TelegramIcon from '@mui/icons-material/Telegram';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { DiscordIcon } from '@ui/icons/DiscordIcon';
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
          <DiscordIcon fill="#556cd6" />
        </Button>
        <Button variant="outlined">{<TelegramIcon />}</Button>
      </Stack>
    </form>
  );
};
