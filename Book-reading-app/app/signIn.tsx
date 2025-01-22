import { View, Text, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { login } from "@/lib/appwrite";
import { useGlobalContext } from '@/lib/GlobalProvider';
import { Redirect } from "expo-router";

const Auth = () => {
  const { refetch, loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch({});
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  const [fontsLoaded] = useFonts({
    'Katibeh-Regular': require('../assets/fonts/Katibeh-Regular.ttf'),
    'karma-Regular': require('../assets/fonts/Karma-Regular.ttf'),
    'kaushan-script': require('../assets/fonts/kaushan-script.regular.ttf'),
    'karma-Bold': require('../assets/fonts/Karma-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/images/bg.jpg')} style={styles.imageBackground}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Image source={require('../assets/images/hero.png')} style={styles.image} resizeMode="contain" />
          <View style={styles.textContainer}>
            <Text style={styles.signInText}>signIn</Text>
            <Text style={styles.welcomeText}>
              Welcome To Inkspire
            </Text>
            <Text style={styles.mainText}>
              Let's Get You Closer To {"\n"}
              <Text style={styles.highlightText}>Your Next Great Story</Text>
            </Text>
            <Text style={styles.loginText}>
              Login to Inkspire with Google
            </Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <View style={styles.loginButtonContent}>
                <Image source={require('../assets/icons/google.png')} style={styles.googleIcon} resizeMode="contain" />
                <Text style={styles.loginButtonText}>
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '66%',
  },
  textContainer: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  signInText: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 3,
    fontFamily: 'Katibeh-Regular',
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Karma-Bold',
    color: '#333333',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'Katibeh-Regular',
    color: '#3F2003',
  },
  highlightText: {
    color: '#008080',
  },
  loginText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Katibeh-Regular',
    color: '#333333',
  },
  loginButton: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 25,
    width: '80%', // Adjust the width as needed
    paddingVertical: 12,
    marginTop: 20,
    alignSelf: 'center', // Center the button horizontally
  },
  loginButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
  loginButtonText: {
    fontSize: 16,
    fontFamily: 'karma-Regular',
    color: '#333333',
    marginLeft: 10,
  },
});

export default Auth;