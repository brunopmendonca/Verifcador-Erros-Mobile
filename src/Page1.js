import React from 'react';
import {  Text, View, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements'

const Page1 = ({navigation}) => ( 
    <View style={{ flex:1 }}>
       <View style={{backgroundColor: "black", height:2}}></View>
        <View style={{backgroundColor:"#ee3338", height:50,flexDirection:"row", justifyContent:'space-around', marginTop:0, padding:13, }}>
          <Text style={{ height: 50, color: "white" }}>CPTM</Text> 
          <Text style={{ height: 100, color: "white" }}>SINALIZAÇÃO</Text> 
          <Image source={require('../assets/icon.png')}/> 
        </View>
        <View style={{backgroundColor: "black", height:2.5}}></View>
        <Text style={{ height: 50, color: "black", marginTop:40, textAlign:"center", fontSize:25, }}>Selecione a opção desejada</Text> 
        
        <View style={{flex:1, flexDirection:"row"}}>
          <View style={{ 
                      flex:1,
                      margin:10,
                    }}>

                       <View style={{flex:1, justifyContent:"center"}}>
                          <Button 
                              buttonStyle = {style.botao}
                              title="EVTC"
                              onPress = {()=> navigation.navigate('Evtc')}
                            />
                       </View>
                     

                       <View style={{flex:1, justifyContent:"center"}}>
                               <Button 
                                buttonStyle = {style.botao}
                                title="HNVC"
                                onPress = {()=> navigation.navigate('Hnvc')}
                              />
                       </View>
                

                       <View style={{flex:1, justifyContent:"center"}}>
                          <Button 
                                buttonStyle = {style.botao}
                                title="NCDM"
                                onPress = {()=> navigation.navigate('Ncdm')}
                          />
                       </View>
                          

                      <View style={{flex:1, justifyContent:"center"}}>
                          <Button 
                              buttonStyle = {style.botao}
                              title="VLM"
                              onPress = {()=> navigation.navigate('Vlm')}
                          />
                       </View>
                  

              </View>

              <View style={{ 
                        flex:1,
                        margin:10,
                        justifyContent:"space-between"

                        }}>
                  
                          <View style={{flex:1, justifyContent:"center"}} >
                              <Button 
                                buttonStyle = {style.botao}
                                title="VLOM"
                                onPress = {()=> navigation.navigate('Vlom')}
                              />
                          </View>
                    
                    
                        <View style={{flex:1, justifyContent:"center"}}>
                            <Button 
                                buttonStyle = {style.botao}
                                title="VPIM"
                                onPress = {()=> navigation.navigate('Vpim')}
                              />
                        </View>
                    
                        <View style={{flex:1,justifyContent:"center"}}>
                            <Button 
                                buttonStyle = {style.botao}
                                title="VROM"
                                onPress = {()=> navigation.navigate('Vrom')}
                            />
                        </View>
                    
                
                        <View style={{flex:1,  justifyContent:"center"}}>
                            <Button 
                                buttonStyle = {style.botao}
                                title="TCOM"
                                onPress = {()=> navigation.navigate('Tcom')}
                              />
                        </View>
                  
              </View>
            </View>
                
     </View>  

  );

  const style = StyleSheet.create({
    botao:{
      height:"90%",
      width: "90%",
      alignSelf:"center",
      backgroundColor: '#ee3338',
      borderRadius:10,  
    },

    botao2:{
      flex:1,
      // backgroundColor:"grey",
      margin:10
    }
  })


  export default Page1