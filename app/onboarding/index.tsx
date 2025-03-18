/* eslint-disable prettier/prettier */
import { LinearGradient } from 'expo-linear-gradient';
import { Link, Stack } from 'expo-router';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
const Onboarding = () => {
  const image = require('../../assets/images/onboarding.jpg');
  return (
    <>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <View className="flex-1">
        <ImageBackground
          source={image}
          resizeMode="cover"
          className="w-full flex-1 justify-center px-4">
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          />
          <View className="flex flex-1 items-center justify-center">
            <View className="flex flex-col gap-2">
              <Text className="text-center text-3xl font-bold text-white">Together Travel</Text>
              <Text className="text-2xl font-medium tracking-wider text-gray-300">
                Explore with Loved Ones
              </Text>
            </View>
            <Text className="mt-8 flex justify-end text-pretty text-center text-sm text-gray-300 ">
              TogetherTravel is your go-to app for planning unforgettable trips with those who
              matter most. Whether it's a family vacation, a getaway with friends, or a romantic
              escape, TogetherTravel helps you effortlessly coordinate every aspect of your journey.
              Share ideas, build personalized itineraries, manage accommodations, and keep everyone
              on the same page. Travel isn't just about the destination—it's about the memories you
              create with your closest companions.
            </Text>
          </View>
          <LinearGradient
            colors={['#4B5EFC', '#7F9CF5']}
            className="mb-6 w-full p-4"
            style={{ borderRadius: 50, elevation: 5 }}>
            <Link href="/onboarding/phone-input" className="text-center font-semibold text-white">
              Start Explore
            </Link>
          </LinearGradient>
        </ImageBackground>
      </View>
    </>
  );
};
export default Onboarding;
