import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Detalhes() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold', fontSize:50, color:'#FF0000'}}>Tela Detalhes</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

