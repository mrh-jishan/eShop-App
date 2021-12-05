import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../core/theme';

const CardItem = ({
    actions,
    description,
    image,
    matches,
    name,
    onPressLeft,
    onPressRight,
    status,
    variant
}) => {
    // Custom styling
    const fullWidth = Dimensions.get('window').width;

    const imageStyle = [
        {
            borderRadius: 8,
            width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
            height: variant ? 170 : 350,
            margin: variant ? 0 : 20
        }
    ];

    const nameStyle = [
        {
            paddingTop: variant ? 10 : 15,
            paddingBottom: variant ? 5 : 7,
            color: '#363636',
            fontSize: variant ? 15 : 30
        }
    ];

    return (
        <View style={styles.container}>
            <Image source={image} style={imageStyle} />
            <View style={styles.cardItem}>
                <Text style={styles.cardText}>20% off!</Text>
            </View>
            <Text style={nameStyle}>mr xxx</Text>
            <Text style={styles.description}>Test user nnn</Text>
            <Text style={styles.status}>{status}</Text>
        </View>
    );
};

export default CardItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        borderRadius: 8,
        alignItems: "center", // for the card 
        // margin: 0,
        marginHorizontal: 10,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: theme.colors.black,
        shadowOffset: { height: 0, width: 0 }
    },
    cardItem: {
        marginTop: 0,
        backgroundColor: theme.colors.primary,
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 20
    },
    cardText: {

        color: theme.colors.white
    },
    description: {
        color: theme.colors.secondary,
        textAlign: "center"
    },
    status: {
        color: theme.colors.secondary,
        fontSize: 12,
        paddingBottom: 10,
    }
});
