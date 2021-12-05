import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Account from '../Account';
import Cart from '../Cart';
import Feeds from '../Feeds';
import Messages from '../Messages';

const Tab = createBottomTabNavigator();

const Dashboard = ({ navigation }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Feeds"
                component={Feeds}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="shopping-bag" color={color} size={20} />
                    ),
                }} />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="cart-plus" color={color} size={20} />
                    ),
                }} />
            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="comments" color={color} size={20} />
                    ),
                }} />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="user-circle" color={color} size={20} />
                    ),
                }} />
        </Tab.Navigator>
    );
};

export default Dashboard;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});