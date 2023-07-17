import CssBaseline from '@mui/material/CssBaseline';
import { Router } from '@m/router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@ui/theme';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
