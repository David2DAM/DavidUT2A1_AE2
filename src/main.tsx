import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login.tsx'
import CssBaseline from '@mui/material/CssBaseline'

import type { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#8c4936',
    },
    secondary: {
      main: '#a06999',
    },
    background: {
      default: '#88dbd8',
      paper: '#8acdc5',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
    },
  },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline>
    <Login />
    </CssBaseline>
  </StrictMode>,
)
