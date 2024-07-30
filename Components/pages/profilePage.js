import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ProfilePage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: 'https://i.imgur.com/lPWdN9S.png' }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
        Andi Muhammad Akbar
      </Text>
      <Text style={{ fontSize: 16, color: 'gray' }}>105841111221</Text>
    </View>
  );
}
