import React from "react";
import { View, Text, Image } from "react-native";


const NoResults = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', marginVertical: 20 }}>
      <Image
        source={require('../assets/images/no-result.png')}
        style={{ width: '91.666667%', height: 320 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 24, fontFamily: 'Rubik-Bold', color: '#4A4A4A', marginTop: 20 }}>
        No Result
      </Text>
      <Text style={{ fontSize: 16, color: '#A0A0A0', marginTop: 8 }}>
        We could not find any result
      </Text>
    </View>
  );
};

export default NoResults;