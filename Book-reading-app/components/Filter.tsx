import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

const categories = [
  { category: "All", title: "All" },
  { category: "fiction", title: "fiction" },
  { category: "fantasy", title: "fantasy" },
  { category: "romance", title: "Romance" },
  { category: "paranormal", title: "Paranormal" },
];

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
      router.setParams({ filter: "" });
      return;
    }
    setSelectedCategory(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleCategoryPress(item.category)}
          key={index}
          style={[
            styles.categoryButton,
            selectedCategory === item.category
              ? styles.selectedCategoryButton
              : styles.unselectedCategoryButton,
          ]}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === item.category
                ? styles.selectedCategoryText
                : styles.unselectedCategoryText,
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 12, 
    marginBottom: 4, 
  },
  categoryButton: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 16, 
    paddingHorizontal: 14, 
    paddingVertical: 6, 
    borderRadius: 9999, 
  },
  selectedCategoryButton: {
    backgroundColor: '#8D6E63', 
  },
  unselectedCategoryButton: {
    backgroundColor: '#E0E0E0', 
    borderColor: '#B0B0B0', 
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 14, 
  },
  selectedCategoryText: {
    color: '#FFFFFF', 
    fontFamily: 'karma-bold', 
    marginTop: 2, 
  },
  unselectedCategoryText: {
    color: '#3E2723', 
    fontFamily: 'karma-regular', 
  },
});

export default Filters;