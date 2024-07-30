import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const ButtonComponent = ({ title, color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{
                width: 350,
                height: 50,
                backgroundColor: color,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    lineHeight: 50,
                }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonComponent;
