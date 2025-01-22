import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const ExploreCard = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Book Image */}
      <Image
        source={require('../assets/images/main11.png')} // Replace with your image URL
        style={styles.bookImage}
      />

      {/* Book Title */}
      <Text style={styles.bookTitle}>Book Title</Text>

      {/* Book Info Row */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Reads</Text>
          <Text style={styles.infoText}>1.2K</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Votes</Text>
          <Text style={styles.infoText}>500</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Parts</Text>
          <Text style={styles.infoText}>10</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Time</Text>
          <Text style={styles.infoText}>5h</Text>
        </View>
      </View>

      {/* Start Reading Button */}
      <TouchableOpacity style={styles.startReadingButton}>
        <Text style={styles.startReadingButtonText}>Start Reading</Text>
      </TouchableOpacity>

      {/* Book Description Tags */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagsContainer}>
        <Text style={styles.tag}>Fantasy</Text>
        <Text style={styles.tag}>Fiction</Text>
        <Text style={styles.tag}>Mystery</Text>
        {/* Add more tags as needed */}
      </ScrollView>

      {/* Book Preview Container */}
      <View style={styles.previewContainer}>
        <Text style={styles.previewTitle}>Preview</Text>
        <Text style={styles.previewText}>
          This is a preview of the book. It gives a brief overview of the content and style of the book.
        </Text>
      </View>

      {/* Table of Contents Container */}
      <View style={styles.tableOfContentsContainer}>
        <Text style={styles.tableOfContentsTitle}>Table of Contents</Text>
        <Text style={styles.chapterText}>Chapter 1</Text>
        <Text style={styles.chapterText}>Chapter 2</Text>
        <Text style={styles.chapterText}>Chapter 3</Text>
        {/* Add more chapters as needed */}
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllButtonText}>See All</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  bookImage: {
    width: '60%',
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
    marginTop:10,
    alignSelf: 'center',
  },
  bookTitle: {
    fontSize: 24,
    fontFamily: 'karma-Bold',
    color: '#3E2723',
    marginBottom: 8,
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: 'karma-Regular',
    color: '#3E2723',
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'karma-Regular',
    color: '#3E2723',
  },
  startReadingButton: {
    backgroundColor: '#0061FF',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 16,
    alignItems: 'center',
  },
  startReadingButtonText: {
    fontSize: 16,
    fontFamily: 'karma-Bold',
    color: '#FFFFFF',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#F2EEE2',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 8,
    fontSize: 14,
    fontFamily: 'karma-Regular',
    color: '#3E2723',
  },
  previewContainer: {
    backgroundColor: '#F2F2F2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  previewTitle: {
    fontSize: 18,
    fontFamily: 'karma-Bold',
    color: '#3E2723',
    marginBottom: 8,
  },
  previewText: {
    fontSize: 14,
    fontFamily: 'karma-Regular',
    color: '#3E2723',
  },
  tableOfContentsContainer: {
    backgroundColor: '#F2F2F2',
    padding: 16,
    borderRadius: 8,
  },
  tableOfContentsTitle: {
    fontSize: 18,
    fontFamily: 'karma-Bold',
    color: '#3E2723',
    marginBottom: 8,
  },
  chapterText: {
    fontSize: 14,
    fontFamily: 'karma-Regular',
    color: '#3E2723',
    marginBottom: 4,
  },
  seeAllButton: {
    marginTop: 8,
    alignItems: 'center',
  },
  seeAllButtonText: {
    fontSize: 14,
    fontFamily: 'karma-Bold',
    color: '#0061FF',
  },
});

export default ExploreCard;