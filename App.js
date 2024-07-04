import React from 'react';
import { View, Text } from 'react-native';
import SignUp from './Components/pages/signUp';
import { useFonts } from 'expo-font';

const App = () => {
  const [addFont] = useFonts({
    'Metropolis-Medium': require('./assets/font/Metropolis-Medium.otf'),
    'Metropolis-Bold': require('./assets/font/Metropolis-Bold.otf'),
    'Metropolis-Black': require('./assets/font/Metropolis-Black.otf'),
    'Metropolis-Light': require('./assets/font/Metropolis-Light.otf'),
    'Metropolis-SemiBold': require('./assets/font/Metropolis-SemiBold.otf')
  })
  if (!addFont) {
    return <Text>Loading...Fontnya gada</Text>;
  }

  return (
  //   <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
  //     {/* <SignUp /> */}
  //   </View>


    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 25, marginTop: 80 }}>
      <Text style={{ fontFamily: 'Metropolis-Light', fontSize: 40 }}>Henshin</Text>
      <Text style={{ fontFamily: 'Metropolis-Medium', fontSize: 40 }}>Henshin</Text>
      <Text style={{ fontFamily: 'Metropolis-SemiBold', fontSize: 40 }}>Henshin</Text>
      <Text style={{ fontFamily: 'Metropolis-Bold', fontSize: 40 }}>Henshin</Text>
      <Text style={{ fontFamily: 'Metropolis-Black', fontSize: 40 }}>Henshin</Text>
      <Text style={{ fontSize: 40 }}>ga Henshin</Text>
    </View>
  );
};

export default App;