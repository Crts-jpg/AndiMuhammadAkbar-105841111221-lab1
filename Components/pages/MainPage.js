import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, Dimensions, Button, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navbar from '../Navbar/bottomNavbar';

const { height, width } = Dimensions.get('window');

const headerImages = [
    { uri: "https://th.bing.com/th/id/OIP.ROS28_sL5d9Gq2JJMVtfVAAAAA?rs=1&pid=ImgDetMain" },
    { uri: "https://i.pinimg.com/originals/98/1a/3b/981a3b64d296a1c6c30f0e35661e426e.jpg" },
    { uri: "https://tse2.mm.bing.net/th?id=OIP.f2QeJstp34FkaQl0AWGG6gHaLH&pid=Api&P=0&h=180" }
];

const saleItems = [
    { uri: "https://tse2.mm.bing.net/th?id=OIP.f2QeJstp34FkaQl0AWGG6gHaLH&pid=Api&P=0&h=180", title: "Evening style", price: "12$", originalPrice: "15$", discount: "-20%", rating: 4.5 },
    { uri: "https://i.pinimg.com/originals/98/1a/3b/981a3b64d296a1c6c30f0e35661e426e.jpg", title: "Hip Hop", price: "19$", originalPrice: "22$", discount: "-15%", rating: 4 },
    // Tambahkan lebih banyak item jika diperlukan
];

const newItems = [
    { uri: "https://whatdresscodeblog.com/wp-content/uploads/2022/12/Tomboy-Outfit-3.jpeg", title: "Tomboy style" },
    { uri: "https://yourclassylook.com/wp-content/uploads/2022/05/IMG_1790.jpg", title: "Casual style" },
    { uri: "https://tse1.mm.bing.net/th?id=OIP.LT8KrJXNbk1p2czI7fdTwgHaHa&pid=Api&P=0&h=180", title: "Casual style" }
];

function MainPage() {
    const [loaded, error] = useFonts({
        'Metropolis-SemiBold': require('../../assets/font/Metropolis-SemiBold.otf'),
        'Metropolis-Bold': require('../../assets/font/Metropolis-Bold.otf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={{ height: height * 0.7 }}
                >
                    {headerImages.map((image, index) => (
                        <ImageBackground
                            key={index}
                            source={image}
                            style={{ justifyContent: "center", width: width, height: '100%' }}
                        >
                            <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start", padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <View style={{ alignItems: "flex-start" }}>
                                    <Text style={{ fontSize: 48, fontWeight: 'bold', color: 'white', fontFamily: 'Metropolis-SemiBold' }}>Fashion</Text>
                                    <Text style={{ fontSize: 48, fontWeight: 'bold', color: 'white', marginTop: -15, fontFamily: 'Metropolis-SemiBold', marginBottom: 10 }}>sale</Text>
                                    <Button title="Check" onPress={() => console.log('Pressed')} color="#FF0000" />
                                </View>
                            </View>
                        </ImageBackground>
                    ))}
                </ScrollView>

                <View style={{ padding: 15 }}>
                    <Text style={{ fontSize: 34, fontWeight: 'bold', fontFamily: 'Metropolis-SemiBold' }}>Sale</Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Super summer sale</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                        {saleItems.map((item, index) => (
                            <View key={index} style={{ margin: 10 }}>
                                <Image source={{ uri: item.uri }} style={{ width: 200, height: 300, borderRadius: 10 }} />
                                <Text style={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'red', color: 'white', paddingHorizontal: 5, borderRadius: 5 }}>{item.discount}</Text>
                                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.title}</Text>
                                <Text style={{ textDecorationLine: 'line-through', color: 'gray' }}>{item.originalPrice}</Text>
                                <Text style={{ fontWeight: 'bold', color: 'red' }}>{item.price}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={{ padding: 15 }}>
                    <Text style={{ fontSize: 34, fontWeight: 'bold', fontFamily: 'Metropolis-SemiBold' }}>New</Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>You've never seen it before!</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                        {newItems.map((item, index) => (
                            <View key={index} style={{ margin: 10 }}>
                                <Image source={{ uri: item.uri }} style={{ width: 200, height: 300, borderRadius: 10 }} />
                                <Text style={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'black', color: 'white', paddingHorizontal: 5, borderRadius: 5 }}>NEW</Text>
                                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>

            <View style={{ height: 60 }}>
                <Navbar />
            </View>
        </View>
    );
}

export default MainPage;
