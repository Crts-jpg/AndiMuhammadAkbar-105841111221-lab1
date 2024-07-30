import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, Image, Dimensions, Button, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navbar from '../Navbar/bottomNavbar';

const { height, width } = Dimensions.get('window');
const headerImages = [
    { uri: "https://th.bing.com/th/id/OIP.ROS28_sL5d9Gq2JJMVtfVAAAAA?rs=1&pid=ImgDetMain" },
];

const newImages = [
    { uri: "https://tse2.mm.bing.net/th?id=OIP.f2QeJstp34FkaQl0AWGG6gHaLH&pid=Api&P=0&h=180", title: "Style 1" },
    { uri: "https://i.pinimg.com/originals/98/1a/3b/981a3b64d296a1c6c30f0e35661e426e.jpg", title: "Style 2" },
    { uri: "https://whatdresscodeblog.com/wp-content/uploads/2022/12/Tomboy-Outfit-3.jpeg", title: "Style 3" }
];

function MainPage({ navigation }) {
    const swiperRef = useRef(null);
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
            <ScrollView
                ref={swiperRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={{ height: height * 0.7 }}>
                {headerImages.map((image, index) => (
                    <ImageBackground
                        key={index}
                        source={image}
                        style={{ justifyContent: "center", width: width, height: '100%' }}>
                        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start", padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.5)',}}>
                            <View style={{ alignItems: "flex-start" }}>
                                <Text style={{ fontSize: 48, fontWeight: 'bold', color: 'white', fontFamily: 'Metropolis-SemiBold',}}>Fashion</Text>
                                <Text style={{ fontSize: 48, fontWeight: 'bold', color: 'white', marginTop: -15, fontFamily: 'Metropolis-SemiBold', marginBottom: 10, }}>sale</Text>
                                <Button title="Check" onPress={() => console.log('Button Pressed')} color="#FF0000" />
                            </View>
                        </View>
                    </ImageBackground>
                ))}
            </ScrollView>
            <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start", paddingBottom: 50, backgroundColor: 'white', width: '100%',}}>
                <Text style={{ fontSize: 34, fontWeight: 'bold', marginBottom: 5, marginTop: 15, marginLeft: 15, fontFamily: 'Metropolis-SemiBold', }}>New</Text>
                <Text style={{ fontSize: 16, color: 'gray', marginLeft: 15, }}>You've never seen it before!</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                    {newImages.map((image, index) => (
                        <View key={index} style={{ margin: 10 }}>
                            <Image source={image} style={{ width: 200, height: 200, borderRadius: 10 }} />
                            <Text style={{ textAlign: 'center', marginTop: 5 }}>{image.title}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
                <Navbar />
            </View>
        </View>
    );
}

export default MainPage;
