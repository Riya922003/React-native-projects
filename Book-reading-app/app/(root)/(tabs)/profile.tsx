import {
  Alert,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import { logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/GlobalProvider";

interface SettingsItemProp {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: object;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProp) => (
  <TouchableOpacity onPress={onPress} style={styles.settingsItem}>
    <View style={styles.settingsItemContent}>
      <Image source={icon} style={styles.iconSize6} />
      <Text style={[styles.textLg, styles.fontRubikMedium, styles.textBlack300, textStyle]}>
        {title}
      </Text>
    </View>

    {showArrow && <Image source={require('../../../assets/icons/arrow.png')} style={styles.iconSize5} />}
  </TouchableOpacity>
);

const StatItem = ({ label, value, onPress }) => (
  <TouchableOpacity style={styles.statItem} onPress={onPress}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </TouchableOpacity>
);

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert("Success", "Logged out successfully");
      refetch();
    } else {
      Alert.alert("Error", "Failed to logout");
    }
  };

  const handleEditProfile = () => {
    Alert.alert("Edit Profile", "Navigate to edit profile screen");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile</Text>
          <Image source={require('../../../assets/icons/bell.png')} style={styles.iconSize5} />
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.profileContent}>
            <View style={styles.profileImageContainer}>
              <Image source={{ uri: user?.avatar }} style={styles.profileImage} />
              <TouchableOpacity 
                style={styles.editIconContainer}
                onPress={handleEditProfile}
              >
                <View style={styles.editIconBackground}>
                  <Image 
                    source={require('../../../assets/icons/edit.png')} 
                    style={styles.editIcon} 
                  />
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.profileName}>{user?.name}</Text>
            
            <View style={styles.statsContainer}>
              <StatItem 
                label="Followers" 
                value="1.2K" 
                onPress={() => Alert.alert('Followers', 'View all followers')} 
              />
              <View style={styles.statDivider} />
              <StatItem 
                label="Following" 
                value="846" 
                onPress={() => Alert.alert('Following', 'View all following')} 
              />
              <View style={styles.statDivider} />
              <StatItem 
                label="Reviews" 
                value="128" 
                onPress={() => Alert.alert('Reviews', 'View all reviews')} 
              />
            </View>
          </View>
        </View>

        <View style={styles.settingsContainer}>
          <SettingsItem icon={require('../../../assets/icons/list.png')} title="My Reading list" />
          <SettingsItem icon={require('../../../assets/icons/messages.png')} title="Wall" />
        </View>

        <View style={styles.settingsContainerWithBorder}>
          <SettingsItem
            icon={require('../../../assets/icons/logout.png')}
            title="Logout"
            textStyle={styles.textDanger}
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    paddingBottom: 32,
    paddingHorizontal: 28,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Rubik-Bold',
  },
  iconSize5: {
    width: 25,
    height: 25,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  profileContent: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  profileImageContainer: {
    position: 'relative',
    width: 176,
    height: 176,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 88,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    zIndex: 1,
  },
  editIconBackground: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  profileName: {
    fontSize: 24,
    fontFamily: 'Rubik-Bold',
    marginTop: 16,
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'Rubik-Bold',
    color: '#000000',
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    color: '#666666',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#E0E0E0',
  },
  settingsContainer: {
    flexDirection: 'column',
    marginTop: 40,
  },
  settingsContainerWithBorder: {
    flexDirection: 'column',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#B0B0B0',
    paddingTop: 20,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  settingsItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconSize6: {
    width: 24,
    height: 24,
  },
  textLg: {
    fontSize: 18,
  },
  fontRubikMedium: {
    fontFamily: 'Rubik-Medium',
  },
  textBlack300: {
    color: '#4A4A4A',
  },
  textDanger: {
    color: '#FF0000',
  },
});

export default Profile;