import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <View style={{flex:1, flexDirection: 'row'}}>
        {/* countainer ke dua */}
        <View style={{
          backgroundColor: 'green',
          flex: 1,
        }}>
        </View>
        <View style={{
          backgroundColor: 'yellow',
          flex: 1,
        }}>
        </View>
        {/* <View style={{
          backgroundColor: 'black',
          flex: 1,
        }}>
        </View>       */}
        {/* countainer ke dua endnya */}
      </View>

        <View style={{
        flex: 1,
        flexDirection: "column"
      }}>
        <View style={{
          flex: 1,
          backgroundColor: 'red',
        }}>
        </View>
        <View style={{
          flex: 1,
          backgroundColor: 'blue',
        }}>
        </View>
      </View>

      
    </View>  
  );
}
