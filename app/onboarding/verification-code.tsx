/* eslint-disable prettier/prettier */
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { View, Text, Pressable, TextInput, Image } from 'react-native';
import { useOnboarding } from '~/context/onboardingContext';
export default function VerificationCode() {
  const { setStep } = useOnboarding();
  const OTP_LENGTH = 6;
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const inputRef = useRef<TextInput[]>([]);
  const router = useRouter();

  const handleChange = (value: string, index: number) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleBackSpace = (index: number) => {
    if (otp[index] === '' && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

    const newOtp = [...otp];
    newOtp[index] = '';
    setOtp(newOtp);
  };

  const handleNext = () => {
    setStep(3);
    router.push('/onboarding/location-tracker');
  };

  const handleBack = () => {
    setStep(1);
    router.push('/onboarding/phone-input');
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
        <Text className="mb-4 text-center font-Phil-Bold text-5xl font-semibold">
          Enter the code
        </Text>
        <View className="mt-4 w-full flex-row items-center justify-center gap-4">
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              value={digit}
              maxLength={1}
              onChangeText={(text) => handleChange(text, index)}
              className="w-[40px] rounded-[10] border border-[#3333] px-4"
              ref={(el) => (inputRef.current[index] = el!)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') handleBackSpace(index);
              }}
              keyboardType="number-pad"
              keyboardAppearance="dark"
            />
          ))}
        </View>
      </View>
      <View className="flex-row items-center justify-between px-8 py-8">
        <Pressable onPress={handleBack} className="">
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Pressable onPress={handleNext} className=" ">
          <View className="size-16 items-center justify-center rounded-full bg-black">
            <AntDesign name="arrowright" size={24} color="white" />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
