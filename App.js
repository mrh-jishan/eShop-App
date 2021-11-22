import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Home from './src/pages/home';
import Login from './src/pages/login';
import Register from './src/pages/register';
import { theme } from './src/core/theme'


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
