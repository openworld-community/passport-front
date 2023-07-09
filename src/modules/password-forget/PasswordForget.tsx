import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { TextInput } from '@ui/fields/TextInput';
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
      email: Yup.string().required('Email is required!').email('Email is invalid!'),
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
      <Button type="submit" variant="contained" style={{ width: '150px', alignSelf: 'center', marginTop: '20px' }}>
        Send
      </Button>
    </Box>
  );
};
