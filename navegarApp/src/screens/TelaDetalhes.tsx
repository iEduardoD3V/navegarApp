
import { StatusBar, } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function Relogio(){
const [data, setData] = useState(new Date())
let horas = new Date().getHours()
let minutos = new Date().getMinutes()
let segundos = new Date().getSeconds()
    useEffect(() => {
     const intervalId = setInterval(()=>{
        setData(new Date())
     }, 1000)   
     return() => clearInterval(intervalId)
    }, [])
    
    if (horas < 10) horas = "0" + horas
    if (minutos < 10) minutos = "0" + minutos
    if (segundos < 10) segundos= "0" + segundos

return(
  
    <SafeAreaView style={styles.container}>
      
        <StatusBar style='auto'/>

        <ImageBackground source={require('../../assets/img/1330770.png')} style={styles.imageBackground}/>

        <View style={styles.boxRelogio}>

        <View style={styles.boxTime}>
            <Text style={styles.textNumber}>
                {horas.toString()}
            </Text>
        </View>

        <View style={styles.boxTime} >
            <Text style={styles.textNumber}>
                {minutos.toString()}
            </Text>
        </View>
        <View style={styles.boxTime}>
            <Text style={styles.textNumber}>
                {segundos.toString()}
            </Text>
        </View>

        </View>
        
    </SafeAreaView>
)


} 

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textNumber:{
    fontSize:50,
    fontWeight:'bold',
    color:'#010101',
  
  },
  boxRelogio:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:200
  },
  boxTime:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    marginBottom: 20,
    width:100,
    height:100,
    borderRadius:20,
    borderColor:'#010101',
    borderWidth:2
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width:500,
    height:900
  },
});


