import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View, StyleSheet } from "react-native";

const TabIcon = ({
  focused,
  source,
  title,
}: {
  focused: boolean;
  source: ImageSourcePropType;
  title: string;
}) => (
  <View style={styles.tabIconContainer}>
    <Image
      source={source}
      style={[styles.icon, { tintColor: focused ? "#008080" : "#221101" }]}
      resizeMode="contain"
    />
    <Text
      style={[
        styles.tabText,
        focused ? styles.focusedText : styles.unfocusedText,
      ]}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={require('../../../assets/icons/home.png')} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={require('../../../assets/icons/lib.png')} title="Library" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={require('../../../assets/icons/search.png')} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={require('../../../assets/icons/user.png')} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    marginTop: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 34, // Adjust the width as needed
    height: 34, // Adjust the height as needed
  },
  tabText: {
    fontSize: 10,
    width: '100%',
    textAlign: 'center',
    marginTop: 1,
  },
  focusedText: {
    color: '#0061FF',
    fontFamily: 'Rubik-Medium',
  },
  unfocusedText: {
    color: '#666876',
    fontFamily: 'Rubik',
  },
});

export default TabsLayout;