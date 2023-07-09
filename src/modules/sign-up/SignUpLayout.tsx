import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import TelegramIcon from '@mui/icons-material/Telegram';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { Stack } from '@mui/material';
import { TextInput } from '@ui/fields/TextInput';
import { DiscordIcon } from '@ui/icons/DiscordIcon';
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
      confirmPassword: '',
      discordId: '',
      telegramId: '',
    },
    onSubmit: values => {
      console.log('onSubmit', values);
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3).max(256).required('Name is required!'),
      email: Yup.string().required('Email is required!').email('Email is invalid!'),
      password: Yup.string().min(5).max(10).required('Password is required!'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match!')
        .required('Password confirmation is required!'),
      discordId: Yup.string().min(3).max(256).required('Discord ID is required!'),
      telegramId: Yup.string().min(3).max(256).required('Telegram ID is required!'),
    }),
  });

  return (
    <Box component="form" display="flex" flexDirection="column" alignItems="flex-end" justifyContent="center" alignContent='center'>
      <TextInput
        label="Name"
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
          startAdornment: <PersonIcon style={{ paddingRight: '5px'}} />,
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
      <Button type="submit" variant="contained" style={{ width: '150px', alignSelf: 'center' }}>
        Sign up
      </Button>
      <Stack direction="row" spacing={1} style={{ marginTop: '30px', alignSelf: 'center' }}>
        <Button variant="outlined">{<DiscordIcon fill={'#556cd6'} />}</Button>
        <Button variant="outlined">{<TelegramIcon />}</Button>
      </Stack>
    </Box>
  );
};
