import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  Image,
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

import { useProfile } from '../context/ProfileContext';
import { colors, font, radius, shadow } from '../theme/theme';

export default function ProfileScreen() {
  const { profile, updateProfile } = useProfile();
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [skillsText, setSkillsText] = useState(profile.skills.join(', '));
  const [errors, setErrors] = useState<Record<string, string>>({});

  const startEditing = () => {
    setName(profile.name);
    setBio(profile.bio);
    setSkillsText(profile.skills.join(', '));
    setErrors({});
    setEditing(true);
  };

  const cancelEditing = () => {
    setEditing(false);
    setErrors({});
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (name.trim().length < 2) e.name = 'Min. 2 znaki';
    if (bio.trim().length < 10) e.bio = 'Min. 10 znaków';
    const skills = skillsText.split(',').map(s => s.trim()).filter(Boolean);
    if (skills.length === 0) e.skills = 'Podaj min. 1 umiejętność';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    const skills = skillsText.split(',').map(s => s.trim()).filter(Boolean);
    updateProfile({ name: name.trim(), bio: bio.trim(), skills });
    setEditing(false);
  };

  if (editing) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.formScroll}>
            <Text style={styles.eyebrow}>EDYCJA</Text>
            <Text style={styles.formTitle}>Edytuj profil</Text>

            <Text style={styles.label}>Imię i nazwisko</Text>
            <TextInput
              onChangeText={setName}
              placeholder="Imię i nazwisko"
              placeholderTextColor={colors.inkSoft}
              style={[styles.input, errors.name && styles.inputError]}
              value={name}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            <Text style={styles.label}>O mnie</Text>
            <TextInput
              multiline
              numberOfLines={4}
              onChangeText={setBio}
              placeholder="Krótki opis"
              placeholderTextColor={colors.inkSoft}
              style={[styles.input, styles.textarea, errors.bio && styles.inputError]}
              value={bio}
            />
            {errors.bio && <Text style={styles.errorText}>{errors.bio}</Text>}

            <Text style={styles.label}>Umiejętności (oddzielone przecinkami)</Text>
            <TextInput
              onChangeText={setSkillsText}
              placeholder="React Native, TypeScript, Git"
              placeholderTextColor={colors.inkSoft}
              style={[styles.input, errors.skills && styles.inputError]}
              value={skillsText}
            />
            {errors.skills && <Text style={styles.errorText}>{errors.skills}</Text>}

            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={cancelEditing} style={[styles.btnGhost, styles.rowBtn]}>
                <Text style={styles.btnGhostText}>Anuluj</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleSave} style={[styles.btnPrimary, styles.rowBtn]}>
                <Text style={styles.btnPrimaryText}>Zapisz</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.hero}>
          <Text style={styles.heroEyebrow}>MOBILE DEVELOPER</Text>
          <Image source={{ uri: 'https://github.com/Mafu2k.png' }} style={styles.avatar} />
          <Text style={styles.heroName}>{profile.name}</Text>
          <Text style={styles.heroRole}>Student informatyki, React Native i iOS</Text>
          <View style={styles.heroMeta}>
            <Ionicons color={colors.gold} name="location-outline" size={14} />
            <Text style={styles.heroMetaText}>Knurów, Polska</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.eyebrow}>O MNIE</Text>
          <View style={styles.card}>
            <Text style={styles.bio}>{profile.bio}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.eyebrow}>UMIEJĘTNOŚCI</Text>
          <View style={styles.skillsWrap}>
            {profile.skills.map(skill => (
              <View key={skill} style={styles.chip}>
                <Text style={styles.chipText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity onPress={startEditing} style={styles.btnGhost}>
            <Ionicons color={colors.ink} name="create-outline" size={18} />
            <Text style={styles.btnGhostText}>Edytuj profil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Alert.alert('Portfolio', 'Dziękuję za odwiedzenie profilu!')}
            style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>Skontaktuj się ze mną</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scroll: {
    padding: 18,
    paddingBottom: 28,
  },
  formScroll: {
    padding: 20,
    paddingBottom: 40,
  },
  hero: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    paddingVertical: 30,
    paddingHorizontal: 24,
    alignItems: 'center',
    ...shadow,
  },
  heroEyebrow: {
    color: colors.ember,
    fontSize: font.eyebrow,
    fontWeight: '800',
    letterSpacing: 2.5,
    marginBottom: 18,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 3,
    borderColor: colors.ember,
    marginBottom: 16,
  },
  heroName: {
    fontSize: font.display,
    fontWeight: '800',
    color: colors.inkOnDark,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  heroRole: {
    marginTop: 6,
    color: colors.inkSoftOnDark,
    fontSize: font.body,
    textAlign: 'center',
  },
  heroMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: 'rgba(251,246,239,0.18)',
  },
  heroMetaText: {
    color: colors.inkSoftOnDark,
    fontSize: font.small,
    fontWeight: '600',
  },
  section: {
    marginTop: 26,
  },
  eyebrow: {
    color: colors.ember,
    fontSize: font.eyebrow,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 12,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.line,
    ...shadow,
  },
  bio: {
    fontSize: font.body,
    color: colors.inkSoft,
    lineHeight: 24,
  },
  skillsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    backgroundColor: colors.emberSoft,
    borderRadius: radius.pill,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.ember,
  },
  chipText: {
    color: colors.ember,
    fontWeight: '700',
    fontSize: font.small,
  },
  actions: {
    marginTop: 30,
    gap: 12,
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 15,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: colors.ink,
  },
  btnGhostText: {
    color: colors.ink,
    fontSize: font.h2,
    fontWeight: '700',
  },
  formTitle: {
    fontSize: font.h1,
    fontWeight: '800',
    color: colors.ink,
    marginBottom: 18,
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
    marginTop: 26,
  },
  rowBtn: {
    flex: 1,
  },
});
