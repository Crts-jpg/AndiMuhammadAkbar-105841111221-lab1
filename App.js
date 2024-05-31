import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000', // To blend with the background image
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
        }}>
          One Piece adalah anime sekaligus manga yang paling populer di dunia. Ceritanya mengikuti petualangan Monkey D. Luffy dan kru bajak laut Topi Jerami dalam mencari harta karun terbesar di dunia, One Piece.
        </Text>
        <Text style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 20,
        }}>
          One Piece wudah melewati Wano Arch dan sekarang sedang memasuki arc baru, Elbaf. Dalam arc ini, Luffy dan Mugiwara kru akan berhadapan dengan Kizaru dan Saturn petinggi World Goverment.
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
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{
              width: 100,
              height: 50,
              color: 'white',
              backgroundColor: '#007bff', // Vibrant blue
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
              backgroundColor: '#28a745', // Vibrant green
              textAlign: 'center',
              lineHeight: 50,
              fontSize: 20,
              borderRadius: 10,
            }}>Register</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
