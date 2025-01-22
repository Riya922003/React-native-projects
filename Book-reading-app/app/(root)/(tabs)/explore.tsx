import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import ExploreCard from '@/components/ExploreCard';
import Search from '@/components/Search';
import { useGlobalContext } from '@/lib/GlobalProvider';

const Explore = () => {
  const { user } = useGlobalContext();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image
              source={require('../../../assets/images/user.png')}
              style={styles.userImage}
            />
            <View style={styles.userTextContainer}>
              <Text style={styles.greetingText}>Welcome Back</Text>
              <Text style={styles.userNameText}>{user?.name}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/icons/bell.png')}
              style={styles.bellIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Search />
      <ExploreCard />
    </View>
    </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    marginTop: 35,
    paddingHorizontal: 0, // Optional: Add horizontal padding if needed
  },
  header: {
    backgroundColor: '#AF9273',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    marginLeft: 8,
    width: 50,
    height: 50,
    borderRadius: 24,
  },
  userTextContainer: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 20,
    fontFamily: 'Karma-Bold',
    color: '#333333',
    marginBottom: 0,
  },
  userNameText: {
    marginTop: 0,
    fontSize: 14,
    fontFamily: 'Karma-Bold',
    color: '#FFFFFF',
  },
  bellIcon: {
    marginRight: 8,
    width: 30,
    height: 30,
  },
});

export default Explore;