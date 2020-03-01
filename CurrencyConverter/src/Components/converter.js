import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet,Image } from 'react-native'
import axios from 'axios'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen'

export class converter extends Component {
    constructor(props){
        super(props);
        this.state={
            tl:'0',
            usd:'0',
            chf:'0',
            jpy:'0',
           
            input:'',
            rates:[]
        }
        this.getRates=this.getRates.bind(this);
    }
    getRates()
    {
        axios.get('http://data.fixer.io/api/latest?access_key=c57c4ed415dafef9597bcbf29f049c69&symbols=USD,CHF,JPY,TRY')
        .then(Response=>{
            const rates=Response.data.rates;
            this.setState({
                rates
            })
        })

    }
    componentDidMount(){
        this.getRates();
    }
    render() {
        const {converterWrapper,textStyle,logo,text,textimg,result,contentText}=styles;

        const {input,usd,chf,jpy,eur,tl,rates}=this.state;

        return (
            <View style={converterWrapper}>
                <View style={contentText}>
                    <View style={logo}>
                        <Image style={textimg}  source={require('../../src/image/euroText.png')}/>
                    </View>
                    <View style={text}>
                        <TextInput placeholder='Enter EUR Value'
                            
                                maxLength={7}
                                keyboardType='numeric'
                                onChangeText={(text)=>{
                                const i=parseFloat(text)||0;

                                this.setState({
                                    input:text,
                                    tl:(i*rates['TRY']).toFixed(3),
                                    usd:(i*rates['USD']).toFixed(3),
                                    chf:(i*rates['CHF']).toFixed(3),
                                    jpy:(i*rates['JPY']).toFixed(3),
                                   
                                })
                                }}
                                value={input} />
                    </View>
                </View>
              
                 <View style={result}>
                    <Text style={textStyle}>TRY:{tl}</Text>
                    <Text style={textStyle}>USD:{usd}</Text>
                    <Text style={textStyle}>CHF:{chf}</Text>
                    <Text style={textStyle}>JPY:{jpy}</Text>
                   
                 </View>
            </View>
           
              
            
        )
    }
}



export default converter;

const styles=StyleSheet.create({
    converterWrapper:{
        paddingTop:30,
        paddingBottom:30,
        width: wp('100%'),
       
     
    },
    contentText:{
        flexDirection: 'row',
    }
    ,
    result:{
      

        margin:wp('10%'),
        width: wp('80%'),
       
       
    },
    textStyle:{
     fontWeight:'bold',
   
     width:170,
     height:50,
     fontSize:17
    },
    logo:{
     
        width: wp('20%'),
        justifyContent:'center',
        alignItems:'center', 
         height: hp('7%'),
    },
    text:{
        
      
        width: wp('80%'),
        height: hp('7%'),
    },
    textimg:{
        justifyContent :'center',
        width:30,
        height:30,
        opacity:0.7
      
    }
})