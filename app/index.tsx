import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

// Import the image (ensure the path is correct)
const image = require('../assets/images/tour.jpg');

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>
          <Text style={styles.title}>A place to make successful{'\n'}plans with your people</Text>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              style={styles.touchable}
              onPress={() => alert('Pressed!')}>
              <LinearGradient colors={['#4B5EFC', '#7F9CF5']} style={styles.button}>
                <Text style={styles.buttonText}>Let's get started</Text>
              </LinearGradient>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
//colors={['#4B5EFC', '#7F9CF5']}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen container
    width: '100%',
  },
  imageBackground: {
    flex: 1, // Fill the container
    justifyContent: 'center', // Center content vertically
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24, // text-3xl equivalent (~24px)
    color: '#FFFFFF',
    lineHeight: 32, // Add spacing for readability with \n
  },
  touchable: {
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    height: 85,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  button: {
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: '#4B5EFC', // Indigo-500
    paddingVertical: 10,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Android shadow
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'medium',
  },
});
