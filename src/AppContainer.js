// src/AppContainer.js
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import App from './App';
import store from './redux/Store';
import theme from "./styles/theme/index"
import { HashRouter as Router, } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

const AppContainer = () => {
  


  return (
    <Provider store={store}>
       <ThemeProvider theme={theme}>
       
      <App />
      </ThemeProvider>
    </Provider>
  );
};

export default AppContainer;
