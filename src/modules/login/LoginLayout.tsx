import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HttpsIcon from '@mui/icons-material/Https';
import TelegramIcon from '@mui/icons-material/Telegram';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { IconButton } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { TextInput } from '@ui/fields/TextInput';
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
      email: Yup.string().required('Email is required!').email('Email is invalid!'),
      password: Yup.string().required('Password is required!'),
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
      <Stack
        style={{
          alignSelf: 'flex-end',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          width: '280px',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <Link href="/password-forget" style={{ fontSize: '0.75rem' }}>
          Forgot your password?
        </Link>
        <FormControlLabel
          style={{ padding: '0', margin: '0'}}
          control={<Checkbox style={{ padding: '0' }} />}
          label={<Typography style={{ fontSize: ' 0.75rem ' }}>Remember me</Typography>}
        />
      </Stack>
      <Button type="submit" variant="contained" style={{ width: '150px', alignSelf: 'center', marginTop:'20px'}}>
        Sign in
      </Button>
      <Stack direction="row" spacing={1} style={{ marginTop: '30px', alignSelf: 'center' }}>
        <Button variant="outlined">{<DiscordIcon fill={'#556cd6'} />}</Button>
        <Button variant="outlined">{<TelegramIcon />}</Button>
      </Stack>
    </Box>
  );
};
