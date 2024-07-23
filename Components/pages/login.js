import { Text, View, Image } from "react-native";
import React from "react";
import ButtonComponent from "../Buttons/button";
import Inputan from "../TextInput/Inputan";

const Login = ({navigation}) => {
    return(
        <View style={{flex: 1}}>
            <View style = {{flexbox: 1, justifyContent: 'flex-end', justifyContent: 'space-between', height : 140}}>
                <Text style = {{fontWeight: 'bold', fontSize: 40, marginLeft: 10, marginTop:50}}>Login</Text>
            </View>

            <View style={{flex:1, flexDirection: 'column', alignItems: 'center', marginTop: 20}}>
                <Inputan nama="Email" color="black" />
                <Inputan nama="Password" color="black" />
                <Text style={{fontSize: 14, marginTop: 10, marginBottom: 30, textAlign: 'right', marginLeft: 175}} onPress={() => navigation.navigate('Forget_Password')} >Forgot your password?</Text>
                <ButtonComponent title="Login" color="red" borderRadius={30} onPress={() => navigation.navigate('MainPage')}/>
                <Text style={{fontSize: 14, marginTop: 10, marginBottom:  30, textAlign: 'center'}} onPress={() => navigation.navigate('signUp')}>Register your account</Text>
                <Text style={{fontSize: 14, marginBottom:  30, textAlign: 'center'}} onPress={() => navigation.navigate('MainPage')}>Ke HomePage</Text>
            </View>

            <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-start'}}>
                <Text style={{ marginTop: 100,}}>Or login with social account</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20}}>
                    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 20, maxWidth: 90, width: 80, height: 70, marginRight: 15}}>
                        <Image
                        source={require('../../assets/Google.png')}
                        style={{width: 50, height: 50}}
                        />
                    </View>
                    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 20, maxWidth: 90, width: 80, height: 70}}>
                        <Image
                        source={require('../../assets/Facebook.png')}
                        style={{width: 50, height: 50}}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Login