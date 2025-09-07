import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.titleContainer}>Message Page</Text>
      <View style={styles.msgContainer}>
        <Text style={styles.msgText}>This is where messages will appear...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, // Take full screen
    backgroundColor: '#1e1e1e', // Dark background for contrast
    padding: 16,
  },
  titleContainer: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20, // Space below title
  },
  msgContainer: {
    flex: 1, // Take remaining space below the title
    backgroundColor: '#2e2e2e',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Shadow on Android
  },
  msgText: {
    color: '#ccc',
    fontSize: 16,
  },
});
