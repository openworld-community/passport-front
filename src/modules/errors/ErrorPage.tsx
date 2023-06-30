import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Oops!
        </Typography>
        <Alert variant="filled" severity="warning">
          Sorry, an unexpected error has occurred!
          <Typography variant="body1">
            <i>{error.statusText || error.message}</i>
          </Typography>
        </Alert>
      </Box>
    </Container>
  );
};
