import React from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const email = 'lukasz.janicki.dev@gmail.com';
const github = 'https://github.com/Mafu2k';
const linkedIn = 'https://www.linkedin.com/in/%C5%82ukasz-janicki-b8647b318/';

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Kontakt</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>E-mail</Text>
          <Text style={styles.value}>{email}</Text>

          <Text style={styles.sectionTitle}>GitHub</Text>
          <Text style={styles.value}>{github}</Text>

          <Text style={styles.sectionTitle}>LinkedIn</Text>
          <Text style={styles.value}>{linkedIn}</Text>

          <Text style={styles.sectionTitle}>Lokalizacja</Text>
          <Text style={styles.location}>Knurów, Polska</Text>

          <TouchableOpacity
            onPress={() => Linking.openURL(`mailto:${email}`)}
            style={[styles.button, styles.mailButton]}>
            <Text style={styles.buttonText}>Wyslij e-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL(github)}
            style={[styles.button, styles.githubButton]}>
            <Text style={styles.buttonText}>Otworz GitHub</Text>
          </TouchableOpacity>
        </View>
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    color: '#0f172a',
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
    marginBottom: 8,
    marginTop: 10,
    color: '#0f172a',
  },
  value: {
    fontSize: 15,
    color: '#3b82f6',
    marginBottom: 16,
  },
  location: {
    fontSize: 15,
    color: '#475569',
    marginBottom: 8,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  mailButton: {
    backgroundColor: '#3b82f6',
  },
  githubButton: {
    backgroundColor: '#333333',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
