import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';

const Login = ({navigation}) => {

    const [user, setUser] = useState({ email: '', password: '' })

    return (
        <Background style={styles.container}>
            <Logo />
            <TextInput
                label="Email"
                returnKeyType="next"
                value={user.email}
                onChangeText={(text) => setUser({ ...user, email: text })}
                // error={!!email.error}
                // errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Password"
                returnKeyType="done"
                value={user.password}
                onChangeText={(text) => setUser({ ...user, password: text })}
                // onChangeText={(text) => setPassword({ value: text, error: '' })}
                // error={!!password.error}
                // errorText={password.error}
                secureTextEntry
            />
           <Button mode="contained" onPress={() => navigation.navigate('Login')}>
                Login
            </Button>
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