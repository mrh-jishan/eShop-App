import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';

const Register = () => {
    return (
        <Background style={styles.container}>
            <Logo />
            <Text>Register Here</Text>
            <Button title="login" />
        </Background>
    );
};

export default Register;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});