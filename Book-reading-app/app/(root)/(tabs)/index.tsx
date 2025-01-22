import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Search from '@/components/Search';
import FeaturedCard from '@/components/FeaturedCard';
import Card from '@/components/Card';
import Filter from '@/components/Filter';
import { useGlobalContext } from '@/lib/GlobalProvider';
import { router, useLocalSearchParams } from 'expo-router';
import { useAppwrite } from '@/lib/useAppwrite';
import { getbooks, getLatestbooks } from '@/lib/appwrite';
import NoResults from '@/components/NoResults';

export default function Index() {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data: latestbooks, loading: latestbooksloading } = useAppwrite({
    fn: getLatestbooks,
  });

  const { 
    data: books,
     refetch, 
     loading 
    } = useAppwrite({
    fn: getbooks,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 31,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 31,
    });
  }, [params.filter, params.query]);

  const handleCardPress = (id: string) => router.push(`/books/${id}`);

  const HeaderComponent = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require('../../../assets/images/user.png')}
            style={styles.userImage}
          />
          <View style={styles.userTextContainer}>
            <Text style={styles.greetingText}>Welcome Back</Text>
            <Text style={styles.userNameText}> {user?.name}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/icons/bell.png')}
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>
      <Search />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={[1]} // Using single item since we just need the structure
        renderItem={() => (
          <>
            <HeaderComponent />
              
            <Filter />


            <View style={styles.featuredContainer}>
              <View style={styles.featuredHeader}>
                <Text style={styles.featuredText}>Featured</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See all</Text>
                </TouchableOpacity>
              </View>
              
              {latestbooksloading ? (
                <ActivityIndicator size="large" className="text-primary-300" />
              ) : !latestbooks || latestbooks.length === 0 ? (
                <NoResults />
              ) : (
                <FlatList
                  data={books}
                  renderItem={({ item }) => (
                    <FeaturedCard item={item} onPress={() => handleCardPress(item.$id)} />
                  )}
                  keyExtractor={(item) => item.$id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.featuredCardsRow}
                  bounces={false}
                  nestedScrollEnabled
                />
              )}
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.cardHeader}>
                <Text style={styles.featuredText}>Our Recommendation</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See all</Text>
                </TouchableOpacity>
              </View>
            
              
              {loading ? (
                <ActivityIndicator size="large" className="text-primary-300" />
              ) : !books || books.length === 0 ? (
                <NoResults />
              ) : (
                <FlatList
                  data={books}
                  renderItem={({ item }) => (
                    <Card item={item} onPress={() => handleCardPress(item.$id)} />
                  )}
                  keyExtractor={(item) => item.$id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.horizontalFlatListContentContainer}
                  nestedScrollEnabled
                />
              )}
            </View>
          </>
        )}
        keyExtractor={() => 'main'}
        contentContainerStyle={styles.flatListContentContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  container: {
    paddingHorizontal: 0,
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
    fontFamily: 'Karma-bold',
    color: '#FFFFFF',
  },
  bellIcon: {
    marginRight: 8,
    width: 30,
    height: 30,
  },
  featuredContainer: {
    marginVertical: 20,
  },
  featuredHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  featuredText: {
    marginLeft: 15,
    fontSize: 16,
    fontFamily: 'karma-Bold',
    color: '#333333',
  },
  seeAllText: {
    marginRight: 15,
    fontSize: 16,
    fontFamily: 'karma-Bold',
    color: '#0061FF',
  },
  featuredCardsRow: {
    paddingHorizontal: 5,
    gap: 4,
  },
  flatListContentContainer: {
    paddingBottom: 32,
  },
  horizontalFlatListContentContainer: {
    
  },
  cardContainer: {
    marginVertical: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});