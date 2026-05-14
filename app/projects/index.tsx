import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { projects } from '../../data/projects';

export default function ProjectsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={projects}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Text style={styles.header}>Moje projekty</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/projects/${item.id}`)}
            style={styles.projectCard}>
            <View style={styles.row}>
              <Ionicons color="#2563eb" name="folder-open" size={20} />
              <Text style={styles.projectName}>{item.name}</Text>
            </View>
            <Text style={styles.projectDesc}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f8',
    padding: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    color: '#0f172a',
  },
  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    flex: 1,
  },
  projectDesc: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});
