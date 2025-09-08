import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {

  const [input, setInput] = useState('')
  const [id, setId] = useState(0);
  const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);


  const handleAdd = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { id: id.toString(), text: '(ItsWanglee) '+input }]);
    setId(id + 1);
    setInput('');
  };


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
              <View style={{flex: 1,borderWidth: 1, borderColor: 'black', backgroundColor: '#ffffffff'}}>
                <FlatList
                data={messages} keyExtractor={(item) => item.id} renderItem={({ item })=>  (<View style={{margin: 3, }}> <Text>{item.text}</Text> </View>)}
                />

               
              </View>
              <TextInput  placeholder='Add a comment...' style={{backgroundColor: 'white', color: 'black', fontWeight: 'bold', borderWidth: 1, borderColor: 'black'}}value={input} onChangeText={setInput}/> 
              <TouchableOpacity onPress={handleAdd} style={{position: 'absolute', marginTop: 346, marginLeft: 317, backgroundColor: 'dodgerblue', height: 40,width: 50, justifyContent: 'center'}} > <Text style={{color: 'white', fontWeight: 'bold', textAlign:'center'}}>Send</Text></TouchableOpacity > 
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
