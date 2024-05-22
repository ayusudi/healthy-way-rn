import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

export default function Explore() {
  return (
    <Stack>
      <Stack.Screen name='list' options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name='[id]' options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
}
