import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HttpsIcon from '@mui/icons-material/Https';
import TelegramIcon from '@mui/icons-material/Telegram';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
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
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Grid
        container
        component="form"
        onSubmit={formik.handleSubmit}
        max-width="460px"
        flexDirection="column"
        alignContent="center"
        alignItems="flex-end"
      >
        <FormControl
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: '30px',
            marginBottom: '30px',
            height: '78px',
            flexWrap: 'wrap',
          }}
        >
          <Typography>Email</Typography>
          <TextField
            style={{ height: '60px', minWidth: '280px', maxWidth: '300px' }}
            variant="outlined"
            placeholder="Type your email"
            type="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon style={{ paddingRight: '5px' }} />
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
        </FormControl>
        <FormControl
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: '30px',
            height: '78px',
            flexWrap: 'wrap',
          }}
        >
          <Typography>Password</Typography>
          <TextField
            style={{ minWidth: '280px', maxWidth: '300px', height: '60px' }}
            placeholder="******"
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
                  <HttpsIcon style={{ paddingRight: '5px' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
        </FormControl>
        <Stack
          style={{
            alignSelf: 'flex-end',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '64px',
            marginBottom: '20px',
          }}
        >
          <Link href="/password-forget" style={{ fontSize: '0.75rem' }}>
            Forgot your password?
          </Link>
          <FormControlLabel
            control={<Checkbox style={{ padding: '0' }} />}
            label={<Typography sx={{ fontSize:' 0.75rem ', marginRight:'0'}}>Remember me</Typography>}
          />
        </Stack>
        <Button type="submit" variant="contained" style={{ width: '150px', alignSelf: 'center' }}>
          Sign in
        </Button>
      </Grid>
      <Stack direction="row" spacing={1} style={{ marginTop: '30px', alignSelf: 'center' }}>
        <Button variant="outlined">{<DiscordIcon fill={'#556cd6'} />}</Button>
        <Button variant="outlined">{<TelegramIcon />}</Button>
      </Stack>
    </Box>
  );
};
