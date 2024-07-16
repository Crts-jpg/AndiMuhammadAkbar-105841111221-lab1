import { Text, View, Image } from "react-native";
import React from "react";
import ButtonComponent from "../Buttons/button";
import Inputan from "../TextInput/Inputan";

const ForgetPassword = () => {
    return(
        <View style={{flex: 1}}>
            <View style={{flexbox:1, justifyContent: 'flex-end', justifyContent: 'space-between', height: 140}}>
                <Text style={{fontWeight: 'bold', fontSize: 30, marginLeft: 10, marginTop: 50}}>Forgot password</Text>
            </View>

            <View style={{flex:1, flexDirection:'column', alignItems: 'center', marginTop: 80}}>
                <Inputan nama="Email" color="black" />
                <Text style={{fontSize: 14, marginTop: 10, marginBottom: 30, textAlign: 'right', marginLeft: 175}}></Text>
                <ButtonComponent title="Send Email" color="red" borderRadius={30} />
            </View>
        </View>
    )
}
export default ForgetPassword