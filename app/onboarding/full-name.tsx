/* eslint-disable prettier/prettier */
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { View, Text, Image, TextInput, Pressable } from 'react-native';

import { useOnboarding } from '~/context/onboardingContext';
const FullName = () => {
  const router = useRouter();
  const { firstName, setFirstName, lastName, setLastName, setStep } = useOnboarding();

  const handleNext = () => {
    router.push('/onboarding/profile-image');
    setStep(4);
  };
  const logo = require('../../assets/images/logo.png');
  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#5d5d3c', '#557c93']}
        className="w-full flex-row items-center justify-center"
        style={{
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,

          elevation: 20,
        }}>
        <Image source={logo} alt="Logo" className="h-24 w-24" resizeMode="cover" />
        <Text className="text-3xl font-bold text-white">Plan Tour</Text>
      </LinearGradient>
      <View className="mt-8 flex-1 px-4">
        <Text className="mb-6 font-Phil-Bold text-4xl font-semibold">What's your name?</Text>
        <View>
          <Text className="mb-3 text-lg text-gray-400">First Name</Text>
          <TextInput
            placeholder=""
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            className="rounded-[10] border border-[#3333] px-4"
          />
        </View>
        <View className="mt-3">
          <Text className="mb-3 text-lg text-gray-400">Last Name</Text>
          <TextInput
            placeholder=""
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            className="rounded-[10] border border-[#3333] px-4"
          />
        </View>
        <Text className="mt-5 text-sm text-gray-400">
          We'll only show this information to people you connect with{' '}
          <Text className="text-black">PlanTour</Text>
        </Text>
      </View>
      <Pressable onPress={handleNext} className="items-end justify-end  px-8 py-8">
        <View className="size-16 items-center justify-center rounded-full bg-black">
          <AntDesign name="arrowright" size={24} color="white" />
        </View>
      </Pressable>
    </View>
  );
};
export default FullName;
