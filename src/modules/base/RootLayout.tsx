import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';

export const RootLayout = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === '/sign-up';

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card sx={{ minWidth: 275 }} elevation={3}>
          <CardContent>
            <Typography variant="h3" color="text.primary" gutterBottom>
              Peredelano
            </Typography>
            <Outlet />
          </CardContent>
          <CardActions>
            <Link to={isSignUpPage ? '/login' : '/sign-up'} component={RouterLink}>
              {isSignUpPage ? 'Login' : 'Register'}
            </Link>
          </CardActions>
        </Card>
      </Box>
      {/* all the other elements */}
    </Container>
  );
};
