import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useProjects } from '../../context/ProjectsContext';
import { colors, font, radius } from '../../theme/theme';

export default function NewProjectScreen() {
  const router = useRouter();
  const { addProject } = useProjects();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [year, setYear] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (name.trim().length < 3) e.name = 'Min. 3 znaki';
    if (description.trim().length < 10) e.description = 'Min. 10 znaków';
    const techs = technologies.split(',').map(t => t.trim()).filter(Boolean);
    if (techs.length === 0) e.technologies = 'Podaj min. 1 technologię';
    const y = parseInt(year, 10);
    if (isNaN(y) || y < 2000 || y > 2030) e.year = 'Rok 2000-2030';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    const techs = technologies.split(',').map(t => t.trim()).filter(Boolean);
    addProject({
      name: name.trim(),
      description: description.trim(),
      technologies: techs,
      year: parseInt(year, 10),
    });
    router.back();
    Alert.alert('Sukces', 'Projekt dodany!');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.eyebrow}>NOWY WPIS</Text>
          <Text style={styles.header}>Nowy projekt</Text>

          <Text style={styles.label}>Nazwa</Text>
          <TextInput
            onChangeText={setName}
            placeholder="np. Mobilna aplikacja pogodowa"
            placeholderTextColor={colors.inkSoft}
            style={[styles.input, errors.name && styles.inputError]}
            value={name}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          <Text style={styles.label}>Opis</Text>
          <TextInput
            multiline
            numberOfLines={4}
            onChangeText={setDescription}
            placeholder="Krótki opis projektu"
            placeholderTextColor={colors.inkSoft}
            style={[styles.input, styles.textarea, errors.description && styles.inputError]}
            value={description}
          />
          {errors.description && (
            <Text style={styles.errorText}>{errors.description}</Text>
          )}

          <Text style={styles.label}>Technologie (oddzielone przecinkami)</Text>
          <TextInput
            onChangeText={setTechnologies}
            placeholder="React Native, TypeScript, Firebase"
            placeholderTextColor={colors.inkSoft}
            style={[styles.input, errors.technologies && styles.inputError]}
            value={technologies}
          />
          {errors.technologies && (
            <Text style={styles.errorText}>{errors.technologies}</Text>
          )}

          <Text style={styles.label}>Rok realizacji</Text>
          <TextInput
            keyboardType="number-pad"
            maxLength={4}
            onChangeText={setYear}
            placeholder="2026"
            placeholderTextColor={colors.inkSoft}
            style={[styles.input, errors.year && styles.inputError]}
            value={year}
          />
          {errors.year && <Text style={styles.errorText}>{errors.year}</Text>}

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => router.back()} style={[styles.btnGhost, styles.rowBtn]}>
              <Text style={styles.btnGhostText}>Anuluj</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSave} style={[styles.btnPrimary, styles.rowBtn]}>
              <Text style={styles.btnPrimaryText}>Zapisz projekt</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  eyebrow: {
    color: colors.ember,
    fontSize: font.eyebrow,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 6,
  },
  header: {
    fontSize: font.h1,
    fontWeight: '800',
    color: colors.ink,
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  label: {
    fontSize: font.small,
    fontWeight: '700',
    marginTop: 14,
    marginBottom: 6,
    color: colors.ink,
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: font.body,
    color: colors.ink,
  },
  textarea: {
    minHeight: 96,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: colors.danger,
  },
  errorText: {
    color: colors.danger,
    fontSize: font.small,
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 28,
  },
  rowBtn: {
    flex: 1,
  },
  btnPrimary: {
    backgroundColor: colors.ember,
    paddingVertical: 15,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  btnPrimaryText: {
    color: colors.inkOnDark,
    fontSize: font.h2,
    fontWeight: '700',
  },
  btnGhost: {
    paddingVertical: 15,
    borderRadius: radius.md,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.ink,
  },
  btnGhostText: {
    color: colors.ink,
    fontSize: font.h2,
    fontWeight: '700',
  },
});
