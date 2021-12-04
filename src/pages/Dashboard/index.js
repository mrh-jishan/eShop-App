import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

const Dashboard = ({ navigation }) => {
    return (
        <Background style={styles.container}>
           <Logo />
            <Text>This is dashboard</Text>
        </Background>
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