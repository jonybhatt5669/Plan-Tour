/* eslint-disable prettier/prettier */
import { Stack } from 'expo-router';

import { OnboardingProvider } from '~/context/onboardingContext';

export default function OnboardingLayout() {
  return (
    <OnboardingProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="phone-input"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="verification-code" options={{ headerShown: false }} />
        <Stack.Screen name="location-tracker" options={{ headerShown: false }} />
        <Stack.Screen name="full-name" options={{ headerShown: false }} />
      </Stack>
    </OnboardingProvider>
  );
}
