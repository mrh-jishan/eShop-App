import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import CardItem from '../../components/CardItem';

const Demo = [
    {
        id: 1,
        name: 'Leanne Graham',
        status: 'Online',
        match: '78',
        description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
        message:
            'I will go back to Gotham and I will fight men Iike this but I will not become an executioner.',
        image: require('./../../assets/01.jpg')
    },
    {
        id: 2,
        name: 'Clementine Bauch',
        match: '93',
        description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
        status: 'Offline',
        message: "Someone like you. Someone who'll rattle the cages.",
        image: require('./../../assets/02.jpg')
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        match: '93',
        description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
        status: 'Offline',
        message: "Someone like you. Someone who'll rattle the cages.",
        image: require('./../../assets/02.jpg')
    },
]

const Feeds = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={Demo}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Profile")}  >
                        <CardItem
                            image={item.image}
                            name={item.name}
                            status={item.status}
                            variant
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Feeds;


const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flex: 1,
        paddingHorizontal: 10
    }
});