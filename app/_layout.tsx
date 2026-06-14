import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { ProfileProvider } from '../context/ProfileContext';
import { ProjectsProvider } from '../context/ProjectsContext';
import { colors } from '../theme/theme';

export default function RootLayout() {
  return (
    <ProjectsProvider>
      <ProfileProvider>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: colors.ember,
            tabBarInactiveTintColor: colors.inkSoft,
            tabBarStyle: {
              backgroundColor: colors.surface,
              borderTopColor: colors.line,
              borderTopWidth: 1,
              height: 62,
              paddingBottom: 8,
              paddingTop: 8,
            },
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: '700',
              letterSpacing: 0.3,
            },
            headerShown: false,
          }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Profil',
              tabBarIcon: ({ color, size }) => (
                <Ionicons color={color} name="person" size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="projects"
            options={{
              title: 'Projekty',
              tabBarIcon: ({ color, size }) => (
                <Ionicons color={color} name="code-slash" size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="contact"
            options={{
              title: 'Kontakt',
              tabBarIcon: ({ color, size }) => (
                <Ionicons color={color} name="mail" size={size} />
              ),
            }}
          />
        </Tabs>
      </ProfileProvider>
    </ProjectsProvider>
  );
}
