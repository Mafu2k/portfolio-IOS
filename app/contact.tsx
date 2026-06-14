import { Ionicons } from '@expo/vector-icons';
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

import { colors, font, radius, shadow } from '../theme/theme';

const email = 'lukasz.janicki.dev@gmail.com';
const github = 'https://github.com/Mafu2k';
const linkedIn = 'https://www.linkedin.com/in/%C5%82ukasz-janicki-b8647b318/';

type Row = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  onPress?: () => void;
};

const rows: Row[] = [
  {
    icon: 'mail-outline',
    label: 'E-mail',
    value: email,
    onPress: () => Linking.openURL(`mailto:${email}`),
  },
  {
    icon: 'logo-github',
    label: 'GitHub',
    value: 'github.com/Mafu2k',
    onPress: () => Linking.openURL(github),
  },
  {
    icon: 'logo-linkedin',
    label: 'LinkedIn',
    value: 'Łukasz Janicki',
    onPress: () => Linking.openURL(linkedIn),
  },
  {
    icon: 'location-outline',
    label: 'Lokalizacja',
    value: 'Knurów, Polska',
  },
];

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>KONTAKT</Text>
        <Text style={styles.title}>Porozmawiajmy</Text>
        <Text style={styles.subtitle}>
          Otwarty na staże, współpracę i ciekawe projekty mobilne.
        </Text>

        <View style={styles.card}>
          {rows.map((row, index) => (
            <TouchableOpacity
              activeOpacity={row.onPress ? 0.6 : 1}
              key={row.label}
              onPress={row.onPress}
              style={[styles.row, index < rows.length - 1 && styles.rowDivider]}>
              <View style={styles.iconCircle}>
                <Ionicons color={colors.ember} name={row.icon} size={18} />
              </View>
              <View style={styles.rowText}>
                <Text style={styles.rowLabel}>{row.label}</Text>
                <Text style={styles.rowValue}>{row.value}</Text>
              </View>
              {row.onPress && (
                <Ionicons color={colors.inkSoft} name="chevron-forward" size={18} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          onPress={() => Linking.openURL(`mailto:${email}`)}
          style={styles.btnPrimary}>
          <Ionicons color={colors.inkOnDark} name="paper-plane-outline" size={18} />
          <Text style={styles.btnPrimaryText}>Wyślij e-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(github)}
          style={styles.btnDark}>
          <Ionicons color={colors.inkOnDark} name="logo-github" size={18} />
          <Text style={styles.btnDarkText}>Otwórz GitHub</Text>
        </TouchableOpacity>
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
  eyebrow: {
    color: colors.ember,
    fontSize: font.eyebrow,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 6,
  },
  title: {
    fontSize: font.display,
    fontWeight: '800',
    color: colors.ink,
    letterSpacing: -0.5,
  },
  subtitle: {
    color: colors.inkSoft,
    fontSize: font.body,
    lineHeight: 22,
    marginTop: 6,
    marginBottom: 22,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.line,
    ...shadow,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 16,
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.emberSoft,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowText: {
    flex: 1,
  },
  rowLabel: {
    color: colors.inkSoft,
    fontSize: font.small,
    fontWeight: '600',
    marginBottom: 2,
  },
  rowValue: {
    color: colors.ink,
    fontSize: font.body,
    fontWeight: '700',
  },
  btnPrimary: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.ember,
    paddingVertical: 15,
    borderRadius: radius.md,
    marginTop: 24,
  },
  btnPrimaryText: {
    color: colors.inkOnDark,
    fontSize: font.h2,
    fontWeight: '700',
  },
  btnDark: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.ink,
    paddingVertical: 15,
    borderRadius: radius.md,
    marginTop: 12,
  },
  btnDarkText: {
    color: colors.inkOnDark,
    fontSize: font.h2,
    fontWeight: '700',
  },
});
