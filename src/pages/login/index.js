import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';

const Login = () => {
    return (
        <Background style={styles.container}>
           <Logo />
           
            <Text>Login Here</Text>
            <TextInput />
            <Button title="register" />
       </Background>
    );
};

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});