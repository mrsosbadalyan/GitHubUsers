import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Image } from 'react-native';
import { fetchUserDetails } from '../api';

const UserDetailsScreen = ({ route }) => {
  const { username } = route.params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserDetails = async () => {
      const userDetails = await fetchUserDetails(username);
      setUser(userDetails);
      setLoading(false);
    };
    getUserDetails();
  }, [username]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {user && (
        <View style={styles.userInfoContainer}>
          <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
          <View style={styles.detailsContainer}>
            <Text style={styles.userName}>{user.name || user.login}</Text>
            <Text style={styles.countryText}>{user.location || 'Not specified'}</Text>
            <View style={styles.followContainer}>
              <Text style={styles.followText}>{user.followers} Followers</Text>
              <Text style={styles.followText}>{user.following} Following</Text>
            </View>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Bio:</Text>
            <Text>{user.bio || 'No bio available'}</Text>
            <Text style={styles.infoTitle}>Public Repositories:</Text>
            <Text>{user.public_repos}</Text>
            <Text style={styles.infoTitle}>Public Gists:</Text>
            <Text>{user.public_gists}</Text>
            <Text style={styles.infoTitle}>Updated At:</Text>
            <Text>{new Date(user.updated_at).toLocaleDateString()}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#77448e',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  userInfoContainer: {
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  detailsContainer: {
    alignItems: 'center',
    width: '100%',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  countryText: {
    marginBottom: 8,
    color: '#888',
    textAlign: 'center',
  },
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    width: '100%',
    paddingHorizontal: 16,
  },
  followText: {
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  infoBox: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 16,
    width: '90%',
    alignSelf: 'center',
  },
  infoTitle: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default UserDetailsScreen;
