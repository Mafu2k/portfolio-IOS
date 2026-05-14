import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const skills = [
    'React Native',
    'Expo Router',
    'TypeScript',
    'JavaScript',
    'Git',
    'REST API',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={{ uri: 'https://github.com/Mafu2k.png' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Łukasz Janicki</Text>
        <Text style={styles.role}>Student iOS / Mobile Developer</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>O mnie</Text>
          <Text style={styles.bio}>
            Tworze aplikacje mobilne w React Native i rozwijam sie w kierunku iOS.
            Lubie praktyczne projekty, czysty kod oraz rozwiazania, ktore maja
            realna wartosc dla uzytkownika.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Umiejetnosci</Text>
          <View style={styles.skillsWrap}>
            {skills.map(skill => (
              <View key={skill} style={styles.skillChip}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          onPress={() => Alert.alert('Portfolio', 'Dziekuje za odwiedzenie profilu!')}
          style={styles.button}>
          <Text style={styles.buttonText}>Skontaktuj sie ze mna</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f8',
  },
  content: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 32,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0f172a',
  },
  role: {
    marginTop: 6,
    marginBottom: 22,
    textAlign: 'center',
    color: '#475569',
    fontSize: 16,
  },
  card: {
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#0f172a',
  },
  bio: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 23,
  },
  skillsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillChip: {
    backgroundColor: '#dbeafe',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  skillText: {
    color: '#1d4ed8',
    fontWeight: '600',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
