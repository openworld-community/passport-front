import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, IconButton, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { MouseEvent, useState } from 'react';
import * as Yup from 'yup';
export const SignUpLayout = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      displayName: '',
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: null,
    },
    onSubmit: values => {
      console.log('123');
    },
    validationSchema: Yup.object({
      displayName: Yup.string().required('Display Name is required!'),
      name: Yup.string().required('Name is required!'),
      surname: Yup.string().required('Surname is required!'),
      email: Yup.string().required('Email is required!').email('Email is invalid!'),
      password: Yup.string().min(5).max(10).required('Password is required!'),
      confirmPassword: Yup.string()
        .nullable()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match!')
        .required('Password confirmation is required!'),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="display-name"
        label="Display Name"
        variant="standard"
        fullWidth
        name="displayName"
        value={formik.values.displayName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.displayName}
        helperText={formik.errors.displayName}
      />
      <TextField
        id="name"
        label="Name"
        variant="standard"
        fullWidth
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.errors.name}
        error={!!formik.errors.name}
      />
      <TextField
        id="surname"
        label="Surname"
        variant="standard"
        fullWidth
        name="surname"
        value={formik.values.surname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.surname}
        helperText={formik.errors.surname}
      />
      <TextField
        id="email"
        label="Email"
        variant="standard"
        fullWidth
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.email}
        helperText={formik.errors.email}
      />
      <TextField
        id="password"
        label="Password"
        variant="standard"
        fullWidth
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.password}
        helperText={formik.errors.password}
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
      <TextField
        id="confirmPassword"
        label="ConfirmPassword"
        variant="standard"
        fullWidth
        name="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.confirmPassword}
        helperText={formik.errors.confirmPassword}
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
        Sign Up
      </Button>
    </form>
  );
};
