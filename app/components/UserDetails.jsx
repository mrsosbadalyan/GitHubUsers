import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserDetails = ({ user }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <Text style={styles.fullName}>{user.name}</Text>
      <Text style={styles.location}>{user.location}</Text>
      <Text style={styles.followers}>Followers: {user.followers}</Text>
      <Text style={styles.following}>Following: {user.following}</Text>
      {user.bio && <Text style={styles.bio}>Bio: {user.bio}</Text>}
      <Text style={styles.publicRepos}>Public Repos: {user.public_repos}</Text>
      <Text style={styles.publicGists}>Public Gists: {user.public_gists}</Text>
      <Text style={styles.updatedAt}>Updated At: {user.updated_at}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  fullName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: '#666',
  },
  followers: {
    fontSize: 16,
  },
  following: {
    fontSize: 16,
  },
  bio: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  publicRepos: {
    fontSize: 16,
  },
  publicGists: {
    fontSize: 16,
  },
  updatedAt: {
    fontSize: 16,
  },
});

export default UserDetails;
