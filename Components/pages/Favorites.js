import React from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

function FavoritesPage({ favorites }) {
    return (
        <View style={{ flex: 1 }}>
        <ScrollView>
            <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 34, fontWeight: 'bold' }}>Favorites</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>Your favorite items</Text>
            {favorites.length === 0 ? (
                <Text style={{ marginTop: 20 }}>No favorite items yet</Text>
            ) : (
                favorites.map((item, index) => (
                <View key={index} style={{ margin: 10 }}>
                    <Image source={{ uri: item.uri }} style={{ width: width - 30, height: 300, borderRadius: 10 }} />
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.title}</Text>
                </View>
                ))
            )}
            </View>
        </ScrollView>
        </View>
    );
}

export default FavoritesPage;
