import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (

    <View style={styles.container}>

      <View style={styles.title}>
        <Text style={[styles.labelTitle]}>Listas</Text>
      </View>
      <Box cor='#ffa4a4' lblcolor='red' message="Animais" ></Box>
      <Box cor='#EDA4FF' lblcolor='purple' message="Carros"></Box>
      <Box cor='#A4D4FF' lblcolor='blue' message="Peixes"></Box>
      <Box cor='#A4FFC3' lblcolor='green' message="Times"> </Box>
      <Box cor='#D1D6D3' lblcolor='gray' message="FIlmes"></Box>
      <Box cor='#E8EFBD' lblcolor='#747D10' message="Linguagens" ></Box>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },

  labelTitle:{
    color:'#fff',
    textAlign:'center',
    marginTop:40,
    fontWeight:'bold',
    fontSize:30
  },

  title:{
    backgroundColor:'#2A9F91',
    width:400,
    height:80,
    marginTop:-15
  },



});
