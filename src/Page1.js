import React from 'react';
import {  Text, View, Button } from 'react-native';

const Page1 = ({navigation}) => ( 
    <View style={{ flex:1 }}>
       <View style={{backgroundColor: "black", height:2}}></View>
        <View style={{backgroundColor:"#ee3338", height:50,flexDirection:"row", justifyContent:'space-around', marginTop:0, padding:13, }}>
          <Text style={{ height: 50, color: "white" }}>CPTM</Text> 
          <Text style={{ height: 100, color: "white" }}>SINALIZAÇÃO</Text> 
          <Text style={{ height: 50, color: "white" }}>CBTC</Text> 
        </View>
        <View style={{backgroundColor: "black", height:3}}></View>
        <Text style={{ height: 50, color: "black", marginTop:50, textAlign:"center", fontSize:25, }}>Selecione a opção desejada</Text> 
            <View style={{ 
                  marginRight:40, marginLeft:40,marginBottom:30,marginTop:30,
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <Button 
                    title="EVTC"
                    color= "#ee3338"
                    onPress = {()=> navigation.navigate('Evtc')}
                  />
            </View>
            <View style={{ 
                  marginRight:40, marginLeft:40,marginBottom:30,
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <Button 
                    title="HNVC"
                    color= "#ee3338"
                    onPress = {()=> navigation.navigate('Hnvc')}
                  />
            </View>
            <View style={{ 
                  marginRight:40, marginLeft:40,marginBottom:30,
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <Button 
                    title="NCDM"
                    color= "#ee3338"
                    onPress = {()=> navigation.navigate('Ncdm')}
                  />
            </View>
            <View style={{ 
                  marginRight:40, marginLeft:40,marginBottom:30,
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <Button 
                    title="VLM"
                    color= "#ee3338"
                    onPress = {()=> navigation.navigate('Vlm')}
                  />
            </View>
            <View style={{ 
                  marginRight:40, marginLeft:40,marginBottom:30,
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <Button 
                    title="VLOM"
                    color= "#ee3338"
                    onPress = {()=> navigation.navigate('Vlom')}
                  />
            </View>
            <View style={{ 
                  marginRight:40, marginLeft:40,marginBottom:30,
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <Button 
                    title="VPIM"
                    color= "#ee3338"
                    onPress = {()=> navigation.navigate('Vpim')}
                  />
            </View>
            <View style={{ 
                  marginRight:40, marginLeft:40,marginBottom:30,
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <Button 
                    title="VROM"
                    color= "#ee3338"
                    onPress = {()=> navigation.navigate('Vrom')}
                  />
            </View>
            <View style={{ 
                  marginRight:40, marginLeft:40,marginBottom:30,
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <Button 
                    title="TCOM"
                    color= "#ee3338"
                    onPress = {()=> navigation.navigate('Tcom')}
                  />
            </View>
             
    </View>
      
  );


  export default Page1