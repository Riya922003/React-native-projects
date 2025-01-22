import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Models } from 'react-native-appwrite';

interface Props {
  item: Models.Document;
  onPress?: () => void;
}

const Card = ({ item, onPress }: Props) => {

  // const handleReadNow = () => {
  //   navigation.navigate('explore'); // Navigate to the Explore tab
  // };

  if (item['featured'] == false) {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.ratingContainer}>
          <Image source={require('../assets/icons/star.png')} style={styles.ratingIcon} />
          <Text style={styles.ratingText}>4.8</Text>
        </View>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{item['Book-name']}</Text>
          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.readNowButton} onPress={onPress}>
              <Text style={styles.readNowButtonText}>Read Now</Text>
            </TouchableOpacity>
            <Image
              source={require('../assets/icons/lib.png')}
              style={styles.footerIcon}
              tintColor="#191D31"
            />
          </View>
        </View>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 10,
    marginBottom: 25,
    width: 150,
    height: 270,
    marginTop: 4,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 8,
    backgroundColor: '#D2B48C',
    shadowColor: '#221101',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    position: 'relative',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    paddingHorizontal: 8,
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 4,
    borderRadius: 20,
    zIndex: 50,
  },
  ratingIcon: {
    width: 10,
    height: 10,
  },
  ratingText: {
    fontSize: 12,
    fontFamily: 'karma-Bold',
    color: '#3E2723',
    marginLeft: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  textContainer: {
    flexDirection: 'column',
    marginTop: 7,
    alignItems: 'center', // Center align all text elements horizontally
  },
  titleText: {
    fontSize: 14,
    height: 20,
    fontFamily: 'karma-bold',
    color: '#3E2723',
    textAlign: 'center', // Center align the title text
  },
  footerContainer: {
    paddingHorizontal: 12,
    paddingVertical: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
  },
  readNowButton: {
    paddingVertical: 3,
    paddingHorizontal: 12,
    backgroundColor: '#F2EEE2',
    borderRadius: 5,
  },
  readNowButtonText: {
    fontSize: 14,
    fontFamily: 'karma-bold',
    color: '#3E2723',
    textAlign: 'center',
  },
  footerIcon: {
    width: 25,
    height: 25,
  },
});

export default Card;