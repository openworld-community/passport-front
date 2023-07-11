import HttpsIcon from '@mui/icons-material/Https';
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

export const PasswordReset = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const formik = useFormik({
    initialValues: {
      password: '',
      newPassword:'',
      confirmPassword: '',
    },
    onSubmit: values => {
      console.log('onSubmit', values);
    },
    validationSchema: Yup.object({
      password: Yup.string().min(5).max(10).required('Password is required!'),
      newPassword: Yup.string().min(5).max(10).required('New password is required!'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match!')
        .required('Confirm your password!'),
    }),
  });

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      justifyContent="center"
      alignContent="center"
      flexWrap="wrap"
    >
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
        label="New password"
        placeholder="******"
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        name="newPassword"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.newPassword}
        helperText={formik.errors.newPassword}
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
      <Button type="submit" variant="contained" style={{ width: '150px', alignSelf: 'center', marginTop: '20px' }}>
       Reset
      </Button>
      <Stack direction="row" spacing={1} style={{ marginTop: '30px', alignSelf: 'center' }}>
        <Button variant="outlined">{<DiscordIcon fill={'#556cd6'} />}</Button>
        <Button variant="outlined">{<TelegramIcon />}</Button>
      </Stack>
    </Box>
  );
};
