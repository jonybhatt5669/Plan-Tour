import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';
const Onboarding = () => {
  return (
    <>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <View>
        <Link href={'/'}>Back</Link>
        <Text>Onboarding</Text>
      </View>
    </>
  );
};
export default Onboarding;
