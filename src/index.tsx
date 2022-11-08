import React from 'react';
import Router from 'routes/routes';
import ReactDOM from 'react-dom/client';
import theme from 'assets/styles/theme.styles';
import { ThemeProvider, CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
