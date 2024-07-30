import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const BagPage = ({ navigation, route }) => {
    const { selectedItem } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.item}>
                <Image source={{ uri: selectedItem.imageUri }} style={styles.image} />
                <View style={styles.details}>
                    <Text style={styles.title}>{selectedItem.title}</Text>
                    <Text style={styles.price}>${selectedItem.price}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Continue Shopping</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    item: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 4,
    },
    details: {
        flex: 1,
        marginLeft: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: '#888',
    },
    button: {
        backgroundColor: 'tomato',
        padding: 12,
        alignItems: 'center',
        marginTop: 16,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default BagPage;
