import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/core/theme';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerTintColor: 'white',
              headerStyle: { backgroundColor: 'tomato' }
            }}>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};


export default App;
