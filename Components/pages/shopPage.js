import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Navbar from '../Navbar/bottomNavbar';

const products = [
    {
        id: '1',
        name: 'Pullover',
        brand: 'Mango',
        price: '51$',
        rating: 4,
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.LT8KrJXNbk1p2czI7fdTwgHaHa&pid=Api&P=0&h=180',
    },
    {
        id: '2',
        name: 'Blouse',
        brand: 'Dorothy Perkins',
        price: '34$',
        rating: 0,
        imageUrl: 'https://yourclassylook.com/wp-content/uploads/2022/05/IMG_1790.jpg',
    },
    {   
        id: '3',
        name: 'T-shirt',
        brand: 'LOST Ink',
        price: '12$',
        rating: 5,
        imageUrl: 'https://whatdresscodeblog.com/wp-content/uploads/2022/12/Tomboy-Outfit-3.jpeg',
    },
    {
        id: '4',
        name: 'Shirt',
        brand: 'Topshop',
        price: '51$',
        rating: 4,
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.f2QeJstp34FkaQl0AWGG6gHaLH&pid=Api&P=0&h=180',
    },
];

const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productBrand}>{item.brand}</Text>
                <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                    <Text key={index} style={styles.star}>
                    {index < item.rating ? '★' : '☆'}
                    </Text>
                ))}
                <Text style={styles.ratingCount}>({item.rating})</Text>
            </View>
            <Text style={styles.productPrice}>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.favoriteButton}>
            <Text style={styles.heart}>❤</Text>
        </TouchableOpacity>
    </View>
);

export default function InnerShopPage() {
return (
    <View style={styles.container}>
    <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
    />
    <Navbar />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  list: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  productContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
    marginBottom: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productBrand: {
    color: 'gray',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#FFD700',
  },
  ratingCount: {
    marginLeft: 4,
    color: 'gray',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  favoriteButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    color: 'red',
    fontSize: 24,
  },
});
