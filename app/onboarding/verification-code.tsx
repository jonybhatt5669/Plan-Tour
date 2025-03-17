/* eslint-disable prettier/prettier */
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRef, useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
export default function VerificationCode() {
  const OTP_LENGTH = 6;
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const inputRef = useRef<TextInput[]>([]);

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

  return (
    <View className="flex-1">
      <View className="flex-row items-center gap-2 px-4 py-4">
        <AntDesign name="arrowleft" size={20} color="black" />
        <Text className="font-semibold">Verification Code</Text>
      </View>
      <View className="mt-8 flex-1 px-4">
        <Text className="text-2xl font-semibold">Enter the code</Text>
        <View className="mt-4 w-full flex-row items-center gap-4">
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
      <Pressable className="items-end justify-end  px-8 py-8">
        <View className="size-16 items-center justify-center rounded-full bg-black">
          <AntDesign name="arrowright" size={24} color="white" />
        </View>
      </Pressable>
    </View>
  );
}
