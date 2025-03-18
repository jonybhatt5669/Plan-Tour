import '../global.css';

import {
  Lora_400Regular as Lora_Regular,
  Lora_500Medium as Lora_Medium,
  Lora_600SemiBold as Lora_SemiBold,
  Lora_700Bold as Lora_Bold,
} from '@expo-google-fonts/lora';
import {
  useFonts,
  Philosopher_400Regular as Phil_Regular,
  Philosopher_700Bold as Phil_Bold,
} from '@expo-google-fonts/philosopher';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();
export default function Layout() {
  const [loaded, error] = useFonts({
    Phil_Bold,
    Phil_Regular,
    Lora_Regular,
    Lora_Medium,
    Lora_SemiBold,
    Lora_Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}

/**
 * Philosopher_400Regular
Philosopher_400Regular_Italic
Philosopher_700Bold
Philosopher_700Bold_Italic

import {  } from '@expo-google-fonts/philosopher'

Lora_400Regular
Lora_500Medium
Lora_600SemiBold
Lora_700Bold
Lora_400Regular_Italic
Lora_500Medium_Italic
Lora_600SemiBold_Italic
Lora_700Bold_Italic

import {  } from '@expo-google-fonts/lora'
 */
