import React, { Component } from 'react'
import { Text,StyleSheet,View,Image  } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen'

export class header extends Component {
    render() {
        const{header,headerText,headerimg,logo,text}=styles;
        return (
            <View style={header}>
               
               <View style={logo} >
              
                    <Image style={headerimg}  source={require('../../src/image/euro.png')}/>
                </View>
               
               <View  style={text}>
                  <Text style={headerText}>{this.props.headerText}</Text>
                </View>
                
               
            </View>
        )
    }
}

export default header;

const styles=StyleSheet.create({
    
    header:{
      height:60,
      shadowColor: "#000",
      shadowOffset: { width: 0,height: 7,},
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14,
      width: wp('100%'),
      flexDirection: 'row',
      backgroundColor:'#ECEFF1'
    },
    headerText:{
      fontSize:20,
      textAlign:'center', 
      
     
    },
    logo:{
      justifyContent:'center',
      alignItems:'center',
     
      width: wp('30%'),
      
     
    },
    text:{
      justifyContent:'center',
      alignItems:'flex-start',
      width: wp('70%'),
     
    },

    headerimg:{
      justifyContent :'center',
      width:50,
      height:50,
    
    }
  })
