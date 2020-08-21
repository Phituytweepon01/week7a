import React from 'react'
import { View, Text,StyleSheet, Image, Button } from 'react-native'
export default class App extends React.Component{
      state={
        headline:'Hello World!',
        count:1,
      }
      updateState=()=>{
          this.setState({
          headline:'TWICE',
          })
    }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.headline}{this.state.count++}</Text>
        <Image style={styles.box1}
           source={{
             uri:'https://i.pinimg.com/originals/66/a9/97/66a99768ba14b9233789c872db398f90.jpg',
           }}></Image>
           <Button 
              onPress={this.updateState}
              title="Sim"
              color="pink"
           />
      </View>
    )
  }
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fonSize:15,
    fontWeight:'bold',
    color:'red',
  },
  box1:{    
    width:400,
    height:400,
  },
})