import { Stack } from 'expo-router';
import { useFonts, Urbanist_700Bold, Urbanist_800ExtraBold } from '@expo-google-fonts/urbanist';
import { Text } from 'react-native';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Urbanist_700Bold, Urbanist_800ExtraBold
  });

  if (!fontsLoaded) {
    return <Text>LOADING</Text>
  } else {
    return <Stack >
      <Stack.Screen name='(home)' options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name='index' options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  }
}
