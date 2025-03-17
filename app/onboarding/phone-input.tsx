/* eslint-disable prettier/prettier */
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';

import CustomCountryPicker from '~/components/CustomDropdown';

import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

const PhoneInput = () => {
  const [countryCode, setCountryCode] = useState<string>('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  const handleNext = () => {
    router.push('/onboarding/verification-code');
  };

  const logo = require('../../assets/images/logo.png');
  return (
    <View className="w-full flex-1">
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
      <View className="my-8 flex-1 px-8">
        <Text className="text-2xl font-bold">Enter your phone number</Text>
        <View className="mt-8 flex-row items-center gap-2">
          <CustomCountryPicker
            onSelectCountryCode={(dialCode: string) => setCountryCode(dialCode)}
          />
          <TextInput
            placeholder="Phone number"
            className="w-3/4 rounded-[8px] border border-[#ccc] p-6"
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
            keyboardType="number-pad"
            keyboardAppearance="dark"
          />
        </View>
        <Text className="mt-4 text-sm text-gray-400">
          By continuing you agree to receive <Text className="font-bold text-black">SMS</Text>{' '}
          message {'\n'}
          from PlanTour for phone verification.
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

export default PhoneInput;
