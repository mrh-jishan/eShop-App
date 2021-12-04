import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

const Cart = ({ navigation }) => {
    return (
        <Background style={styles.container}>
           <Logo />
           
            <Button mode="contained" onPress={() => navigation.navigate('Login')}>
                Login
            </Button>

            <Button onPress={() => navigation.navigate('Register')}>
                Register
            </Button>
        </Background>
    );
};

export default Cart;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});