/* eslint-disable prettier/prettier */
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
const ProfileImage = () => {
  const router = useRouter();
  const [image, setImage] = useState<string | undefined>(undefined);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log('Result', result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      alert('No image selected');
    }
  };

  const handleCloseImage = () => {
    setImage(undefined);
  };

  const handleNext = () => {
    router.push('/onboarding/last-screen');
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
        <Text className="mb-4 text-center font-Phil-Bold text-4xl font-semibold text-gray-600">
          Add your profile image
        </Text>
        <View className="flex-1 items-center justify-center">
          {image ? (
            <View className="relative">
              <Image source={{ uri: image }} className="h-64 w-64 rounded-full" />
              <Pressable
                onPress={handleCloseImage}
                className="absolute -top-4 right-10 size-12 items-center justify-center rounded-full bg-red-500">
                <EvilIcons name="close" size={24} color="white" />
              </Pressable>
            </View>
          ) : (
            <>
              <Pressable
                onPress={pickImage}
                className=" size-2/3 items-center justify-center rounded-[10] border border-[#3333] bg-slate-500/30 p-8">
                <Entypo name="image" size={24} color="black" />
              </Pressable>
            </>
          )}
        </View>
      </View>
      <Pressable onPress={handleNext} className="items-end justify-end  px-8 py-8">
        <View className="size-16 items-center justify-center rounded-full bg-black">
          <AntDesign name="arrowright" size={24} color="white" />
        </View>
      </Pressable>
    </View>
  );
};
export default ProfileImage;
