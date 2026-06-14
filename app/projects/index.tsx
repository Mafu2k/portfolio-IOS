import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useProjects } from '../../context/ProjectsContext';
import { colors, font, radius, shadow } from '../../theme/theme';

type SortOrder = 'desc' | 'asc';

export default function ProjectsScreen() {
  const router = useRouter();
  const { projects, removeProject } = useProjects();
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) =>
      sortOrder === 'desc' ? b.year - a.year : a.year - b.year,
    );
  }, [projects, sortOrder]);

  const confirmDelete = (id: string, name: string) => {
    Alert.alert(
      'Usuń projekt',
      `Czy na pewno chcesz usunąć projekt "${name}"?`,
      [
        { text: 'Anuluj', style: 'cancel' },
        { text: 'Usuń', style: 'destructive', onPress: () => removeProject(id) },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={sortedProjects}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View style={styles.headerWrap}>
            <Text style={styles.eyebrow}>PORTFOLIO</Text>
            <Text style={styles.header}>Moje projekty</Text>
            <Text style={styles.subtitle}>
              {projects.length}{' '}
              {projects.length === 1 ? 'projekt' : 'projektów'} w kolekcji
            </Text>

            <TouchableOpacity
              onPress={() => router.push('/projects/new')}
              style={styles.addButton}>
              <Ionicons color={colors.inkOnDark} name="add" size={20} />
              <Text style={styles.addButtonText}>Dodaj projekt</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSortOrder(o => (o === 'desc' ? 'asc' : 'desc'))}
              style={styles.sortButton}>
              <Ionicons
                color={colors.pine}
                name={sortOrder === 'desc' ? 'arrow-down' : 'arrow-up'}
                size={16}
              />
              <Text style={styles.sortButtonText}>
                Rok: {sortOrder === 'desc' ? 'najnowsze' : 'najstarsze'}
              </Text>
            </TouchableOpacity>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>Brak projektów. Dodaj pierwszy!</Text>
        }
        renderItem={({ item, index }) => {
          const accent = index % 2 === 0 ? colors.ember : colors.pine;
          return (
            <TouchableOpacity
              onPress={() => router.push(`/projects/${item.id}`)}
              style={styles.projectCard}>
              <View style={[styles.accent, { backgroundColor: accent }]} />
              <View style={styles.cardBody}>
                <View style={styles.cardTop}>
                  <Text style={styles.projectName}>{item.name}</Text>
                  <View style={styles.yearBadge}>
                    <Text style={styles.yearBadgeText}>{item.year}</Text>
                  </View>
                </View>
                <Text numberOfLines={2} style={styles.projectDesc}>
                  {item.description}
                </Text>
                <View style={styles.techRow}>
                  {item.technologies.slice(0, 3).map(tech => (
                    <View key={tech} style={styles.tag}>
                      <Text style={styles.tagText}>{tech}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <TouchableOpacity
                hitSlop={8}
                onPress={() => confirmDelete(item.id, item.name)}
                style={styles.deleteButton}>
                <Ionicons color={colors.danger} name="trash-outline" size={18} />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  listContent: {
    padding: 18,
    paddingBottom: 24,
  },
  headerWrap: {
    marginBottom: 8,
  },
  eyebrow: {
    color: colors.ember,
    fontSize: font.eyebrow,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 6,
  },
  header: {
    fontSize: font.display,
    fontWeight: '800',
    color: colors.ink,
    letterSpacing: -0.5,
  },
  subtitle: {
    color: colors.inkSoft,
    fontSize: font.body,
    marginTop: 4,
    marginBottom: 18,
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.ember,
    paddingVertical: 14,
    borderRadius: radius.md,
    marginBottom: 12,
  },
  addButtonText: {
    color: colors.inkOnDark,
    fontSize: font.h2,
    fontWeight: '700',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.pineSoft,
    paddingVertical: 11,
    borderRadius: radius.md,
    marginBottom: 18,
  },
  sortButtonText: {
    color: colors.pine,
    fontWeight: '700',
    fontSize: font.small,
  },
  projectCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.line,
    marginBottom: 14,
    ...shadow,
  },
  accent: {
    width: 6,
    borderTopLeftRadius: radius.md,
    borderBottomLeftRadius: radius.md,
  },
  cardBody: {
    flex: 1,
    padding: 16,
    paddingRight: 42,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 6,
  },
  projectName: {
    fontSize: font.h2,
    fontWeight: '800',
    color: colors.ink,
    flex: 1,
  },
  yearBadge: {
    backgroundColor: colors.bgAlt,
    borderRadius: radius.pill,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  yearBadgeText: {
    color: colors.inkSoft,
    fontSize: font.small,
    fontWeight: '700',
  },
  projectDesc: {
    fontSize: font.small,
    color: colors.inkSoft,
    lineHeight: 20,
    marginBottom: 10,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: colors.bgAlt,
    borderRadius: radius.sm,
    paddingVertical: 4,
    paddingHorizontal: 9,
  },
  tagText: {
    color: colors.ink,
    fontSize: 11,
    fontWeight: '600',
  },
  deleteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 4,
    zIndex: 10,
  },
  emptyText: {
    textAlign: 'center',
    color: colors.inkSoft,
    fontSize: font.body,
    marginTop: 24,
  },
});
