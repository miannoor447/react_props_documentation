import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  AppContainer  from './AppContainer';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./assets/styles/theme/index";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppContainer />
            </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
