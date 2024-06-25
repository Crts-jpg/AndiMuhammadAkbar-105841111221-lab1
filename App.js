import React from 'react';
import { View} from 'react-native';
import SignUp from './Components/pages/signUp';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
      <SignUp />
    </View>
  );
};

export default App;