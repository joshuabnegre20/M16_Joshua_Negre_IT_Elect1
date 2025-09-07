import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {

  


  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.titleContainer}>Comment Section</Text>
      <View style={styles.comContainer}>
        <View style={{flex: 1}}>
          <View style={{height: 60, width: 340, margin: 10}}>
            <Text style={{ marginLeft: 70, marginTop: 20, fontWeight: 'bold', fontSize: 20, color: 'white' }} >its_Joshuadessssu</Text>
            <View style={{height: 60, width: 60, backgroundColor: '#616060ff', borderRadius: 50, position: 'absolute', justifyContent: 'center'}}>
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: 'white'}}>Profile</Text>
            </View>
          </View>
              <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
                <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold'}}>How's your day everyone????</Text>
              </View>
              <ScrollView style={{flex: 1, backgroundColor: 'yellow'}}>
                <Text>yoo</Text>
              </ScrollView>
              <TextInput placeholder='Add a comment...' style={{backgroundColor: 'white', color: 'black', fontWeight: 'bold', borderWidth: 1, borderColor: 'black'}}></TextInput>
        </View>
        
        <View style={{flex: 1, }}>
          <View style={{height: 60, width: 340, margin: 10}}>
            <Text style={{ marginLeft: 70, marginTop: 20, fontWeight: 'bold', fontSize: 20, color: 'white' }} >WangleeChan___</Text>
            <View style={{height: 60, width: 60, backgroundColor: '#616060ff', borderRadius: 50, position: 'absolute', justifyContent: 'center'}}>
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: 'white'}}>Profile</Text>
            </View>
          </View>
              <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
                <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold'}}>Its time to LOCKED IN 😎</Text>
              </View>
              <TextInput placeholder='Add a comment...' style={{backgroundColor: 'white', color: 'black', fontWeight: 'bold', borderWidth: 1, borderColor: 'black'}}></TextInput>
        </View>
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
  comContainer: {
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
  postContainer: {

  }
});
