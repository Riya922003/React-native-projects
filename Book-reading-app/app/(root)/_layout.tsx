import React from 'react';
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useGlobalContext } from "../../lib/GlobalProvider";

export default function AppLayout() {
  const { loading, isLogged } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0061FF" />
      </SafeAreaView>
    );
  }

  if (!isLogged) {
    return <Redirect href="/signIn" />;
  }

  return <Slot />;
}

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});