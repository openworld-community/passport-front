import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const RootLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSignUpPage = location.pathname === '/sign-up';
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Bootstrap project
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              href={isSignUpPage ? undefined : '/sign-up'}
              variant="contained"
              size="small"
              onClick={() => (isSignUpPage ? navigate(-1) : undefined)}
            >
              {isSignUpPage ? 'back' : 'sign up'}
            </Button>
          </CardActions>
        </Card>
      </Box>
      {/* all the other elements */}
      <Outlet />
    </Container>
  );
};
