import React, {useState} from 'react';
import {  Text, View, Button, TextInput, Alert } from 'react-native';
import Vpim from '../arquivos/vpim'

const arquivo1 = Vpim


const VPIM = () => { 

  const [resultado1, setResultado1] = useState ()
  const [resultado2, setResultado2] = useState ()
  const [contador, setContador] = useState()
  
  function Hand(e){
    const entrada1 = e
    setContador(entrada1.length)
    if(entrada1[contador] > 1){
      window.alert("Digite Somente os números binarios 0 ou 1")
    }
    const entrada2 = parseInt(entrada1, 2)
    const filtrar = arquivo1.filter(a=>{
     return a.__EMPTY == entrada2
    })


    try{
      setResultado1(`Decimal ${filtrar[0].arquivo}`)
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
            <Text style={{ height: 50, color: "white" }}>CPTM</Text> 
            <Text style={{ height: 100, color: "white" }}>SINALIZAÇÃO</Text> 
  <Text style={{ height: 50, color: "white" }}>CBTC</Text> 
          </View>
          <View style={{backgroundColor: "black", height:2.5}}></View>
  <Text style={{ height: 50, color: "black", marginTop:50, textAlign:"center", fontSize:25, }}>Digite o Binário do Display</Text>  
          <View style={{ alignItems:"center", justifyContent:"center", flexDirection:"row", marginTop:30}} >
  
          <TextInput style={{width:200,height:37, borderStyle:"solid",borderRadius:2, backgroundColor:"#CDC9C9"}} onChangeText ={Hand}  placeholder="Digite o código" keyboardType='numeric' />
          <Button 
                   
                   
                    onPress= {createTwoButtonAlert}
                    title="Pesquisar"
                    color= "#ee3338"
                
          />
  
          </View>      
      </View>
        
    )};
  
  
    export default VPIM