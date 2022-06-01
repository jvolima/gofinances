import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { StatusBar } from 'react-native';
import { AuthProvider, useAuth } from './src/hooks/auth';
import { Routes } from './src/routes';
import useCachedResources from './src/hooks/useCachedResources';

export default function App() {
  const isLoadingComplete = useCachedResources();

  const { userStorageLoading } = useAuth();

  if(!isLoadingComplete || userStorageLoading) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>

      <AuthProvider>
        <Routes />
      </AuthProvider>       
    </ThemeProvider>
  )
}

