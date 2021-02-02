import React from 'react';
import {  Text, View, Button, TextInput } from 'react-native';


const HNVC = () => ( 
    <View style={{ flex:1 }}>
        <View style={{backgroundColor:"#ee3338", height:50,flexDirection:"row", justifyContent:'space-around', marginTop:0, padding:13, }}>
          <Text style={{ height: 50, color: "white" }}>CPTM</Text> 
          <Text style={{ height: 100, color: "white" }}>SINALIZAÇÃO</Text> 
          <Text style={{ height: 50, color: "white" }}>CBTC</Text> 
        </View>
        <View style={{backgroundColor: "black", height:5}}></View>
        <Text style={{ height: 50, color: "black", marginTop:50, textAlign:"center", fontSize:20, }}>Digite o binário correspondente</Text>  
        <View style={{ alignItems:"center", justifyContent:"center", flexDirection:"row", marginTop:30}} >

        <TextInput style={{width:200,height:37, borderStyle:"solid",borderRadius:2, backgroundColor:"#CDC9C9"}} placeholder="Digite somente 0 ou 1" keyboardType='numeric'/>
        <Button 
                  title="Pesquisar"
                  color= "#ee3338"
              
        />

        </View>      
    </View>
      
  );


  export default HNVC