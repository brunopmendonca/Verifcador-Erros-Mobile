import React, {useState} from 'react';
import {  Text, View, Button, TextInput, Alert } from 'react-native';
import Ncdm from "../arquivos/arquivo"

const arquivo = Ncdm


const NCDM = () => { 

const [data,setValor] = useState(arquivo)

const [entrada, setEntrada] = useState()

const [botao, setBotao]= useState()

const [resultado, setResultado] = useState ()

function comparar(){

  
}




return( 
    <View style={{ flex:1 }}>
        <View style={{backgroundColor:"#ee3338", height:50,flexDirection:"row", justifyContent:'space-around', marginTop:0, padding:13, }}>
          <Text style={{ height: 50, color: "white" }}>CPTM</Text> 
          <Text style={{ height: 100, color: "white" }}>SINALIZAÇÃO</Text> 
<Text style={{ height: 50, color: "white" }}>CBTC</Text> 
        </View>
        <View style={{backgroundColor: "black", height:5}}></View>
<Text style={{ height: 50, color: "black", marginTop:50, textAlign:"center", fontSize:20, }}>Digite o Código do Display {entrada}</Text>  
        <View style={{ alignItems:"center", justifyContent:"center", flexDirection:"row", marginTop:30}} >

        <TextInput style={{width:200,height:37, borderStyle:"solid",borderRadius:2, backgroundColor:"#CDC9C9"}} onChangeText = {e=>{
         setEntrada(e)}}  placeholder="Digite o código "/>
        <Button 
                 
                 
                  onPress= {()=>{alert('nada')}}
                  title="Pesquisar"
                  color= "#ee3338"
              
        />

        </View>      
    </View>
      
  )};


  export default NCDM