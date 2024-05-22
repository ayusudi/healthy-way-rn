import { Tabs } from 'expo-router';

export default function Layout() {
  return <Tabs screenOptions={{ headerShown: false }}>
    <Tabs.Screen name='bookmark'></Tabs.Screen>
    <Tabs.Screen name='(explore)'></Tabs.Screen>
    <Tabs.Screen name='exit'></Tabs.Screen>
  </Tabs>
}
