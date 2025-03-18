/* eslint-disable prettier/prettier */
import { View, Image, StyleSheet, Text } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(main)'); // Navigate to home screen
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text className="font-Lora_Medium mt-4 text-2xl font-medium">Updating your settings....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Change this based on your theme
  },
  logo: {
    width: 150, // Adjust based on your logo size
    height: 150, // Adjust based on your logo size
    resizeMode: 'contain',
  },
});
