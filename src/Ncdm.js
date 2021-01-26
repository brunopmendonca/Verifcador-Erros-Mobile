import React from 'react';
import {  Text, View, Button } from 'react-native';


const NCDM = () => ( 
    <View style={{ flex:1 }}>
        <View style={{backgroundColor:"#ee3338", height:50,flexDirection:"row", justifyContent:'space-around', marginTop:0, padding:13, }}>
          <Text style={{ height: 50, color: "white" }}>CPTM</Text> 
          <Text style={{ height: 100, color: "white" }}>SINALIZAÇÃO</Text> 
          <Text style={{ height: 50, color: "white" }}>CBTC</Text> 
        </View>
        <View style={{backgroundColor: "black", height:5}}></View>
        <Text style={{ height: 50, color: "black", marginTop:50, textAlign:"center", fontSize:20, }}>Digite o Código do display</Text>        
    </View>
      
  );


  export default NCDM