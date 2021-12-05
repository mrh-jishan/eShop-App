import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';

const Messages = ({ navigation }) => {
    return (
        <Background style={styles.container}>
            <Logo />
            <Text>Messages</Text>
        </Background>
    );
};

export default Messages;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});