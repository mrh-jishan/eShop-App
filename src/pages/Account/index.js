import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';

const Account = ({ navigation }) => {
    return (
        <Background style={styles.container}>
            <Logo />

            <Text>About page</Text>
        </Background>
    );
};

export default Account;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});