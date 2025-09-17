import { useState } from 'react';
import { Button, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

  const[count, setCount]= useState(0);
  const[background, setBackground]= useState('');
  const[color, setColor] = useState('white');

  function handleColor(){
    setBackground('white'); setColor('black')

  }
  function handleBlack(){
    setBackground('black'); setColor('white')
  }

  return (
  
    <SafeAreaView style={{flex: 1}} >
      <View style={{flex:1 , backgroundColor: background , justifyContent: 'center'}}>
      <Text style={{color: color, textAlign: 'center', fontSize: 40,marginBottom: 20}}>Counter: {count}</Text>
      <Button title='+' onPress={() => setCount(count+1)}/>
        <Button title='-' onPress={() => setCount(count-1)}/>
          <Text style={{color: color, textAlign: 'center',fontSize: 40, marginBottom: 20}} > Background Changer</Text>
            <Button title='Light Mode' onPress={() => handleColor()}/>
              <Button title='Dark Mode' onPress={() => handleBlack()} />
</View>
    </SafeAreaView>
  );
}
