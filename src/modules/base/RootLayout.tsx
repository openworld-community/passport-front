import { LoginLayout } from '@m/login/LoginLayout';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

export const RootLayout = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === '/sign-up';

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card sx={{ minWidth: 275 }} elevation={3}>
          <CardContent >
            <Typography variant="h3" color="text.primary" gutterBottom>
              Peredelano
            </Typography>
            <CardActions style={{justifyContent: 'flex-end'}}>
              <Link  marginBottom={'10px'}  href={isSignUpPage ? '/login' : '/sign-up'}>{isSignUpPage ? 'or sign in instead' : 'or register instead'}</Link>
            </CardActions>

            <LoginLayout />
          </CardContent>
        </Card>
      </Box>
      {/* all the other elements */}
    </Container>
  );
};
