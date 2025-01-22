import React, { useState } from "react";
import { View, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";
import { useDebouncedCallback } from "use-debounce";
import { useLocalSearchParams, router, usePathname } from "expo-router";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          placeholderTextColor="#AF9273" 
          style={styles.searchInput}
        />
      </View>

      <TouchableOpacity>
        <Image source={require('../assets/icons/filter.jpg')} style={styles.filterIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16, 
    borderRadius: 8, 
    backgroundColor: '#FFFFF', 
    borderColor: '#AF9273', 
    borderWidth: 1,
    marginTop: 20, 
    paddingVertical: 8, 
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 50,
  },
  searchIcon: {
    width: 20, 
    height: 20, 
  },
  searchInput: {
    fontSize: 14, 
    fontFamily: 'Karma-Regular', 
    marginLeft: 8,
    flex: 1,
  },
  filterIcon: {
    width: 25, 
    height: 25, 
  },
});

export default Search;