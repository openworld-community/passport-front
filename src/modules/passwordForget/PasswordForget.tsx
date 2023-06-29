import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const PasswordForget = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      console.log('onSubmit', values);
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required!'),
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

      <Button type="submit" variant="contained" style={{ width: '150px' }}>
        Send
      </Button>
    </form>
  );
};
