/* eslint-disable prettier/prettier */
import AntDesign from '@expo/vector-icons/AntDesign';
import { useQuery } from '@tanstack/react-query';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useOnboarding } from '~/context/onboardingContext';

const fetchLocations = async (query: string) => {
  if (!query) return [];
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${query}`,
    {
      headers: {
        'User-Agent': 'PlantourApp (jitbjony@gmail.com)', // Replace with your valid email/domain
      },
    }
  );
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

const SelectAddress = () => {
  const { setStep, setAddress } = useOnboarding();
  const [query, setQuery] = useState('');
  const router = useRouter();

  const {
    data: locations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['locations', query],
    queryFn: () => fetchLocations(query),
    enabled: query.length > 2, // API call only if query length > 2
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  const handleNext = () => {
    setAddress(query);
    setStep(3);
    router.push('/onboarding/full-name');
  };

  const logo = require('../../assets/images/logo.png');

  return (
    <View style={{ flex: 1 }}>
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
      <View className="flex-1 p-6">
        {/* Progress Bar */}

        <Text
          style={{
            fontSize: 30,
            fontWeight: 'semibold',
            marginBottom: 16,
            fontFamily: 'Phil_Bold',
          }}>
          Where are you based?
        </Text>

        {/* Search Input */}
        <TextInput
          placeholder="Search your location"
          style={{
            borderWidth: 1,
            padding: 15,
            fontSize: 16,
            borderRadius: 10,
            marginBottom: 10,
          }}
          value={query}
          onChangeText={setQuery}
        />

        {/* Loading Indicator */}
        {isLoading && <ActivityIndicator size="large" color="black" />}
        {error && <Text>Error fetching locations ${error.message}</Text>}

        {/* Location List */}
        <View className="flex-1">
          <FlatList
            data={locations || []}
            keyExtractor={(item) => item.place_id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ padding: 15, borderBottomWidth: 1 }}
                onPress={() => {
                  setQuery(item.display_name);
                  // router.push('/onboarding/UploadPhoto');
                }}>
                <Text>{item.display_name}</Text>
              </TouchableOpacity>
            )}
          />
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

export default SelectAddress;
