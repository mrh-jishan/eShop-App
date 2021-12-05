import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const PublicRoutes = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home", headerTitleStyle: { alignSelf: 'center' }, }}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: "Login" }}
            />

            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ title: "Forgot Password" }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ title: "Register" }}
            />

        </Stack.Navigator>
    );
}


// const Tab = createBottomTabNavigator();

// const MyTabs = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarActiveTintColor: theme.colors.accent
//             }}
//         >
//             <Tab.Screen
//                 name="Dashboard"
//                 component={Dashboard}
//                 options={{
//                     tabBarLabel: 'Dashboard',
//                     tabBarIcon: ({ color }) => (
//                         <Icon name="search" color={color} size={20} />
//                     ),
//                 }}
//             />

//             {/* <Tab.Screen
//                 name="Feeds"
//                 component={Feeds}
//                 options={{
//                     tabBarLabel: 'Feeds',
//                     tabBarIcon: ({ color }) => (
//                         <Icon name="search" color={color} size={20} />
//                     ),
//                 }}
//             />
//             <Tab.Screen
//                 name="Chat"
//                 component={Chat}
//                 options={{
//                     tabBarLabel: 'Chat',
//                     tabBarIcon: ({ color }) => (
//                         <Icon name="heart" color={color} size={20} />
//                     ),
//                 }}
//             />
//             <Tab.Screen
//                 name="Cart"
//                 component={Cart}
//                 options={{
//                     tabBarLabel: 'Cart',
//                     tabBarIcon: ({ color }) => (
//                         <Icon name="envelope" color={color} size={20} />
//                     ),
//                 }}
//             />

//             <Tab.Screen
//                 name="Account"
//                 component={Account}
//                 options={{
//                     tabBarLabel: 'Account',
//                     tabBarIcon: ({ color }) => (
//                         <Icon name="cogs" color={color} size={20} />
//                     ),
//                 }}

//             /> */}

//         </Tab.Navigator>
//     );
// }

const Stack = createStackNavigator();

const SecureRoutes = () => {
    return (
        <Stack.Navigator initialRouteName='Dashboard'>
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ title: "Dashboard" }}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}


const Routes = () => {

    const [loggedIn, setLoggedIn] = useState(true)

    return (
        <NavigationContainer>
            {loggedIn ? <SecureRoutes /> : <PublicRoutes />}
        </NavigationContainer>
    )
}

export default Routes;