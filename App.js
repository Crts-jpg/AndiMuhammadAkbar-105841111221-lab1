import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontWeight: 'bold',color:'#66FCF1', fontFamily:'monospace' }} >BLACK CLOVER</Text>
      <Text style={{ fontSize: 15, color:'white' }}>Open up App.js to start working on your app!</Text>
      <Text style={{ fontSize: 20, color:'white'}} >Changes you make will automatically reload.</Text>
      <Text style={{ fontSize: 25, color:'white', textDecorationLine: 'underline', fontStyle:'italic'}} >Shake your phone to open the developer menu.</Text>
      
      <Image source={require('./assets/clover.png')} style={{ width: 159, height: 159, marginTop:15, marginBottom: 15, color:"white" }} />
      <Button
        title="Spoiler Button"
        onPress={() => alert('Ga boleh spoiler, Haram!')}
      />
      <Text style={{ fontSize: 30, color:'white', textShadowColor:'#66FCF1', textDecorationLine: 'underline' }} >Indonesia</Text>
      <View style={{ width: 300, height: 100, backgroundColor: 'red', marginTop: 15 }} />
      <View style={{ width: 300, height: 100, backgroundColor: 'white' }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2833',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
