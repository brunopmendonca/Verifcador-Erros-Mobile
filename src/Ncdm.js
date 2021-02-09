import React, {useState} from 'react';
import {  Text, View, Button, TextInput, Alert,Image } from 'react-native';
import Ncdm from "../arquivos/arquivo"

const arquivo = Ncdm


const NCDM = () => { 

const [resultado1, setResultado1] = useState ()
const [resultado2, setResultado2] = useState ()

function Hand(e){
  
  const filtrar = arquivo.filter(a=>{
   return a.NCDM == e.toUpperCase()
  })

  try{
    setResultado1(`Falha ${filtrar[0].NCDM}`)
    setResultado2(`${filtrar[0].__EMPTY_1}

${filtrar[0].__EMPTY_2}`)
  
  }catch(err){
    setResultado1('Valor digitado incorreto')
    setResultado2('O valor que você digitou não consta no banco de dados')


  }

}

const createTwoButtonAlert = () =>
    Alert.alert(
       resultado1,
       resultado2,
      
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

return( 
    <View style={{ flex:1 }}>
      <View style={{backgroundColor: "black", height:2}}></View>
        <View style={{backgroundColor:"#ee3338", height:50,flexDirection:"row", justifyContent:'space-around', marginTop:0, padding:13, }}>
          <Image style={{width:"13%", height:"100%"}} source={require('../assets/icon.png')}/> 
          <Text style={{ height: 100, color: "white" }}>SINALIZAÇÃO</Text> 
          <Text style={{ height: 50, color: "white" }}>CBTC</Text> 
        </View>
        <View style={{backgroundColor: "black", height:2.5}}></View>
        <Text style={{ height: 50, color: "black", marginTop:50, textAlign:"center", fontSize:25, }}>Digite o Código do Display</Text> 
        <Text style={{ height: 50, color: "black", textAlign:"center", fontSize:25, }}>(NCDM)</Text> 
        <View style={{ alignItems:"center", justifyContent:"center", flexDirection:"row", marginTop:30}} >

        <TextInput style={{width:200,height:37, borderStyle:"solid",borderRadius:2, backgroundColor:"#CDC9C9", padding:5}} onChangeText ={Hand}  placeholder="Digite o código "/>
        <Button 
                 
                 
                  onPress= {createTwoButtonAlert}
                  title="Pesquisar"
                  color= "#ee3338"
              
        />

        </View>      
    </View>
      
  )};


  export default NCDM