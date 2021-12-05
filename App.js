import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/core/theme';
import Routes from './src/navigation';


const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </PaperProvider>
  );
};


export default App;
