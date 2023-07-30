import HttpsIcon from '@mui/icons-material/Https';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { TextInput } from '@ui/fields/TextInput';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

export const PasswordReset = () => {
  const { guid } = useParams<{ guid?: string }>();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log('onSubmit', values);
    },
    validationSchema: Yup.object({
      newPassword: Yup.string().oneOf([Yup.ref('newPassword')], 'Passwords do not match!'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match!'),
    }),
  });
  if (!guid) {
    return (
      <Box>
        <Typography>The link is incorrect!</Typography>
      </Box>
    );
  }
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
    </Box>
  );
};
