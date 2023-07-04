import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Box, Button, FormControl, Grid, InputAdornment, TextField, Typography } from '@mui/material';
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
            style={{ minWidth: '280px', maxWidth: '300px', height: '60px' }}
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
        </FormControl>
      </Grid>
      <Button type="submit" variant="contained" style={{ width: '150px', alignSelf: 'center' }}>
        Send
      </Button>
    </Box>
  );
};
