/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { countries } from '~/utils/country';

// Sample country data
const countryData = [
  { code: 'US', name: 'United States', dial_code: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dial_code: '+44', flag: '🇬🇧' },
  { code: 'IN', name: 'India', dial_code: '+91', flag: '🇮🇳' },
  { code: 'DE', name: 'Germany', dial_code: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dial_code: '+33', flag: '🇫🇷' },
];

interface Country {
  code: string;
  name: string;
  dial_code: string;
  flag: string;
}

interface Props {
  onSelectCountryCode: (dialCode: string) => void;
}
const CustomCountryPicker = ({ onSelectCountryCode }: Props) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const selectCountry = (country: any) => {
    setSelectedCountry(country);
    onSelectCountryCode(country.dial_code);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Button to Open Picker */}
      <TouchableOpacity style={styles.picker} onPress={() => setModalVisible(true)}>
        <Text style={styles.flag}>{selectedCountry.flag}</Text>
        <Text style={styles.callingCode}>{selectedCountry.dial_code}</Text>
      </TouchableOpacity>

      {/* Custom Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.code}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              initialNumToRender={10}
              maxToRenderPerBatch={10}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.countryItem} onPress={() => selectCountry(item)}>
                  <Text style={styles.flag}>{item.flag}</Text>
                  <Text style={styles.countryName}>{item.name}</Text>
                  <Text style={styles.callingCode}>{item.dial_code}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  flag: {
    fontSize: 30,
    marginRight: 10,
  },
  countryName: {
    fontSize: 16,
    marginRight: 10,
  },
  callingCode: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ff5c5c',
    borderRadius: 5,
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomCountryPicker;
