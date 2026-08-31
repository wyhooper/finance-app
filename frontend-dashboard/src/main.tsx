import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme.ts'
import App from './App.tsx'
import "./styles/index.css"
import '@fontsource-variable/manrope';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
);
