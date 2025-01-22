import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Models } from 'react-native-appwrite';

interface Props {
  item: Models.Document;
  onPress?: () => void;
}

export const FeaturedCard = ({ item, onPress }: Props) => {
  if (item['featured']==true) {
  

  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.bookNameText} numberOfLines={1}>
          {item['Book-name']}
        </Text>
        <Text style={styles.aboutBookText} numberOfLines={2}>
          {item['description']}
        </Text>
        <Text style={styles.availText} numberOfLines={1}>
          New parts dropping weekly...
        </Text>
        <TouchableOpacity style={styles.readNowButton} onPress={onPress}>
          <Text style={styles.readNowButtonText}>Read Now</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );
}
};

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 380, // Adjust the width to fit multiple cards in the horizontal FlatList
    height: 200,
    padding: 5,
    backgroundColor: '#F2EEE2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  textContainer: {
    width: '60%', // Set the width to 60% of the total card container
    padding: 10,
  },
  bookNameText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'kaushan-script',
    color: '#221101',
  },
  aboutBookText: {
    marginLeft: 4,
    marginRight: 4,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'karma-bold',
    color: '#221101',
    marginTop: 5,
  },
  availText: {
    marginLeft: 4,
    marginRight: 4,
    fontSize: 14,
    fontFamily: 'karma-regular',
    textAlign: 'center',
    color: '#3A1D01',
    marginTop: 5,
  },
  readNowButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#8D4503',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  readNowButtonText: {
    fontSize: 14,
    fontFamily: 'karma-regular',
    color: '#fff',
  },
  image: {
    width: '40%',
    height: '100%',
    borderRadius: 10,
  },
});

export default FeaturedCard;