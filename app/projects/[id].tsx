import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useProjects } from '../../context/ProjectsContext';
import { colors, font, radius, shadow } from '../../theme/theme';

export default function ProjectDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const projectId = Array.isArray(id) ? id[0] : id;
  const { projects, removeProject } = useProjects();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.notFoundContainer}>
          <Ionicons color={colors.inkSoft} name="folder-open-outline" size={48} />
          <Text style={styles.notFoundText}>Nie znaleziono projektu</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.btnGhost}>
            <Text style={styles.btnGhostText}>Wróć do listy</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const confirmDelete = () => {
    Alert.alert(
      'Usuń projekt',
      `Czy na pewno chcesz usunąć projekt "${project.name}"?`,
      [
        { text: 'Anuluj', style: 'cancel' },
        {
          text: 'Usuń',
          style: 'destructive',
          onPress: () => {
            removeProject(project.id);
            router.back();
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backLink}>
          <Ionicons color={colors.ember} name="arrow-back" size={18} />
          <Text style={styles.backLinkText}>Projekty</Text>
        </TouchableOpacity>

        <Text style={styles.eyebrow}>PROJEKT</Text>
        <Text style={styles.title}>{project.name}</Text>

        <View style={styles.yearBadge}>
          <Ionicons color={colors.gold} name="calendar-outline" size={14} />
          <Text style={styles.yearBadgeText}>{project.year}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.description}>{project.description}</Text>
        </View>

        <Text style={styles.sectionLabel}>TECHNOLOGIE</Text>
        <View style={styles.techWrap}>
          {project.technologies.map(technology => (
            <View key={technology} style={styles.chip}>
              <Text style={styles.chipText}>{technology}</Text>
            </View>
          ))}
        </View>

        <View style={styles.actions}>
          <TouchableOpacity onPress={() => router.back()} style={styles.btnGhost}>
            <Text style={styles.btnGhostText}>Wróć do listy</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={confirmDelete} style={styles.btnDanger}>
            <Ionicons color={colors.inkOnDark} name="trash-outline" size={18} />
            <Text style={styles.btnDangerText}>Usuń projekt</Text>
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
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  backLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 18,
  },
  backLinkText: {
    color: colors.ember,
    fontSize: font.body,
    fontWeight: '700',
  },
  eyebrow: {
    color: colors.ember,
    fontSize: font.eyebrow,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    fontSize: font.display,
    fontWeight: '800',
    color: colors.ink,
    letterSpacing: -0.5,
  },
  yearBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    backgroundColor: colors.bgAlt,
    borderRadius: radius.pill,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginTop: 14,
  },
  yearBadgeText: {
    color: colors.inkSoft,
    fontSize: font.small,
    fontWeight: '700',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.line,
    marginTop: 20,
    ...shadow,
  },
  description: {
    fontSize: font.body,
    lineHeight: 24,
    color: colors.inkSoft,
  },
  sectionLabel: {
    color: colors.pine,
    fontSize: font.eyebrow,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 26,
    marginBottom: 12,
  },
  techWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    backgroundColor: colors.pineSoft,
    borderRadius: radius.pill,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.pine,
  },
  chipText: {
    color: colors.pine,
    fontWeight: '700',
    fontSize: font.small,
  },
  actions: {
    marginTop: 32,
    gap: 12,
  },
  btnGhost: {
    justifyContent: 'center',
    alignItems: 'center',
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
  btnDanger: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.danger,
    paddingVertical: 15,
    borderRadius: radius.md,
  },
  btnDangerText: {
    color: colors.inkOnDark,
    fontSize: font.h2,
    fontWeight: '700',
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 16,
  },
  notFoundText: {
    fontSize: font.h1,
    fontWeight: '800',
    color: colors.ink,
    textAlign: 'center',
  },
});
