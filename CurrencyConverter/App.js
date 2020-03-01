import React, { Component } from 'react'
import { View,StyleSheet } from 'react-native'
 import Header from './src/Components/header'
 import Converter from './src/Components/converter'
 
export class App extends Component {
  render() {
    return (
      <View style={styles.container} >
       <Header headerText='Currency Converter'/> 
       <Converter/>
      </View>
    )
  }
}

export default App

const styles=StyleSheet.create({
  container:{

  }
})