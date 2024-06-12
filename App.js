import { Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import ButtonComponent from './Components/Buttons/button';

const App = () => {
  
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000',
    }}>
      <Image
        source={require('./assets/onepiece.png')}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: 0.5,
          zIndex: -1,
        }}
        resizeMode="cover"
      />
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
        <Image 
          source={require('./assets/one-piece-logo-75.png')} 
          style={{
            width: 200,
            height: 200,
            marginTop: 50,
            opacity: 1,
            zIndex: 1,
          }}
        />
        <Text style={{
          color: 'white',
          fontSize: 28,
          fontWeight: '300',
          textAlign: 'center',
          marginTop: 20,
        }}>
          Nonton One Piece Tiap Hari Minggu
        </Text>
        <Text style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
          Ayolah Nakama kita nonton One Piece.
        </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 50,
        }}>

          <ButtonComponent title="Sign In" color="#007bff" />
          <ButtonComponent title="Sign Up" color="#06D84F" />
          
        </View>
      </ScrollView>
    </View>
  );



};

export default App;
