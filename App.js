import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const App = () => {

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image
        source={require('./assets/onepiece.png')}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: 0.7,
        }}
        resizeMode="cover"
      />
      <Text style={{
        color: 'white',
        fontSize: 45,
        fontFamily: 'curved',
        fontWeight: 'light',
        position: 'absolute',
        top: 50,
        marginTop: 380,
      }}>
        Nonton One Piece Tiap Hari Minggu
      </Text>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginBottom: 50,
      }}>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{
            width: 100,
            height: 50,
            color: 'white',
            backgroundColor: 'black',
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 20,
            borderRadius: 10,
          }}>Login</Text>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{
            width: 100,
            height: 50,
            color: 'white',
            backgroundColor: 'black',
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 20,
            borderRadius: 10,
          }}>Register</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
