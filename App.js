import React from 'react';
import {
  PaperProvider
} from 'react-native-paper';
import Router from './src/routes/Router';

// davi é gostoso
export default function App() {

  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  );
}




