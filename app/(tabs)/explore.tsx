import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function TabTwoScreen() {

  const [input, setInput] = useState('')
  const [id, setId] = useState('')
  const [msg, setMsg] = useState<{ id: string; text: string}[]>([])

  const handelMessage = () =>{
    if(input.trim()==='') return 

    setMsg([...msg, {id: id.toString(), text: input+'  (itsWanglee)'  }])
   
    setInput('')

  }

  

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.titleContainer}>Message Page</Text>
      <View style={styles.msgContainer}>
        <View style={{flex: 1}}>
           <View style={{height: 60, width: 340, margin: 10}}>
                      <Text style={{ marginLeft: 70, marginTop: 20, fontWeight: 'bold', fontSize: 20, color: 'white' }} >its_Joshuadessssu</Text>
                      <View style={{height: 60, width: 60, backgroundColor: '#616060ff', borderRadius: 50, position: 'absolute', justifyContent: 'center'}}>
                        <Text style={{marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: 'white'}}>Profile</Text>
                      </View>
                    </View> </View>
        <View style={{flex: 9, }}>
          <FlatList data={msg} keyExtractor={(item) =>item.id} renderItem={({item}) => ( <View><Text style={{fontWeight: 'bold', color: 'white', margin: 10, textAlign: 'right'}}>{item.text}</Text> </View> )}/>

        </View>
        
        
         <TextInput value={input} onChangeText={setInput} style={{backgroundColor: 'white', color: 'black', fontWeight: 'bold', borderWidth: 1, borderColor: 'black'}}/>
         <TouchableOpacity onPress={handelMessage} style={{width: 50, height: 40, backgroundColor: 'dodgerblue', justifyContent: 'center', marginTop: 744, marginLeft: 330, position: 'absolute'}}> <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Send</Text>  </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    backgroundColor: '#1e1e1e', 
    padding: 16,
  },
  titleContainer: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
  },
  msgContainer: {
    flex: 1, 
    backgroundColor: '#2e2e2e',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  msgText: {
    color: '#ccc',
    fontSize: 16,
  },
});
