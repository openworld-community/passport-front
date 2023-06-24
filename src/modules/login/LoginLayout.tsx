import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { MouseEvent, useState } from 'react';
import * as Yup from 'yup';
export const LoginLayout = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log('onSubmit', values);
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required!'),
      password: Yup.string().required('Password is required!'),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="username"
        label="Username"
        variant="standard"
        fullWidth
        name="username"

        helperText={formik.errors.username}
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.username}
      />
      <TextField
        id="password"
        label="Password"
        variant="standard"
        fullWidth
        name="password"
        helperText={formik.errors.password}
        type={showPassword ? 'text' : 'password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.password}
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      <Button type="submit" style={{ marginTop: '30px' }} variant="contained" fullWidth>
        Login
      </Button>

    </form>
  );
};
