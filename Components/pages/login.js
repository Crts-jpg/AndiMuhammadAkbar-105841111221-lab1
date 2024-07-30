import { Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import ButtonComponent from "../Buttons/button";
import Inputan from "../TextInput/Inputan";

const LoginPage = ({ navigation }) => {
    const [formLogin, setForm] = useState({
        email: '',
        password: ''
    });

    const handleLogin = () => {
        if (formLogin.email && formLogin.password) {
        navigation.navigate('MainPage');
        } else {
        alert('Please enter email and password');
        }
    };

    return (
        <View style={{ flex: 1 }}>
        <View style={{ flexbox: 1, justifyContent: 'flex-end', justifyContent: 'space-between', height: 140 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10, marginTop: 50 }}>Login</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
            <View style={{ width: '80%' }}>
            <Text style={{ textAlign: 'left', marginBottom: 5, fontSize: 16 }}>Email</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
                onChangeText={(text) => setForm({ ...formLogin, email: text })}
                value={formLogin.email}
            />
            </View>
            <View style={{ width: '80%' }}>
            <Text style={{ textAlign: 'left', marginBottom: 5, fontSize: 16 }}>Password</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
                onChangeText={(text) => setForm({ ...formLogin, password: text })}
                value={formLogin.password}
                secureTextEntry
            />
            </View>
            <Text style={{ fontSize: 14, marginTop: 10, marginBottom: 30, textAlign: 'right', width: '80%' }} onPress={() => navigation.navigate('ForgetPassword')}>Forgot your password?</Text>
            <ButtonComponent title="Login" color="red" borderRadius={30} onPress={handleLogin} />
            <Text style={{ fontSize: 14, marginTop: 10, marginBottom: 30, textAlign: 'center' }} onPress={() => navigation.navigate('SignUp')}>Register your account</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Text style={{ marginTop: 100 }}>Or login with social account</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 20, maxWidth: 90, width: 80, height: 70, marginRight: 15 }}>
                <Image
                source={require('../../assets/Google.png')}
                style={{ width: 50, height: 50 }}
                />
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 20, maxWidth: 90, width: 80, height: 70 }}>
                <Image
                source={require('../../assets/Facebook.png')}
                style={{ width: 50, height: 50 }}
                />
            </View>
            </View>
        </View>
        </View>
    )
}

export default LoginPage;
