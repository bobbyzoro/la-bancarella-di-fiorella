import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeadProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/la-bancarella-di-fiorella">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HeadProvider>
  </React.StrictMode>
);