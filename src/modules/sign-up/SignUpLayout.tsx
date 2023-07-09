import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import TelegramIcon from '@mui/icons-material/Telegram';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { FormControl } from '@mui/material';
import { Grid } from '@mui/material';
import { IconButton } from '@mui/material';
import { Stack } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
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
        .nullable()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match!')
        .required('Password confirmation is required!'),
      discordId: Yup.string().min(3).max(256).required('Discord ID is required!'),
      telegramId: Yup.string().min(3).max(256).required('Telegram ID is required!'),
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
          <Typography>Name</Typography>
          <TextField
            style={{ height: '60px', minWidth: '280px', maxWidth: '300px' }}
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
        </FormControl>
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
            type="email"
            placeholder="Type your email"
            variant="outlined"
            style={{ minWidth: '280px', maxWidth: '300px', height: '60px' }}
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
        </FormControl>
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
          <Typography>Password</Typography>
          <TextField
            placeholder="******"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            style={{ minWidth: '280px', maxWidth: '300px', height: '60px' }}
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
        </FormControl>
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
          <Typography>Confirm Pass</Typography>
          <TextField
            placeholder="******"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            style={{ minWidth: '280px', maxWidth: '300px', height: '60px' }}
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
        </FormControl>
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
          <Typography>Discord ID</Typography>
          <TextField
            type="text"
            placeholder="Type your Discord username"
            variant="outlined"
            style={{ minWidth: '280px', maxWidth: '300px', height: '60px' }}
            name="email"
            value={formik.values.discordId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!formik.errors.discordId}
            helperText={formik.errors.discordId}
            InputProps={{
              startAdornment: <DiscordIcon />,
            }}
          />
        </FormControl>
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
          Telegram ID
          <TextField
            type="text"
            placeholder="Type your Telegram username"
            variant="outlined"
            style={{ minWidth: '280px', maxWidth: '300px', height: '60px' }}
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
        </FormControl>
        <Button type="submit" variant="contained" style={{ width: '150px', alignSelf: 'center' }}>
          Sign up
        </Button>
      </Grid>
      <Stack direction="row" spacing={1} style={{ marginTop: '30px', alignSelf: 'center' }}>
        <Button variant="outlined">{<DiscordIcon fill={'#556cd6'} />}</Button>
        <Button variant="outlined">{<TelegramIcon />}</Button>
      </Stack>
    </Box>
  );
};
