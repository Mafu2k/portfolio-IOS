import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: { backgroundColor: '#ffffff' },
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
  );
}
