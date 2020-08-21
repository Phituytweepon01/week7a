import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
export default function App() {
  return(
    <View style={styles.container}>
      <Text style={styles.t1}
      >I Love My Cat</Text>
      <Text style={styles.t2}
      >Career of React Native</Text>
      <Image
        style={{width:370,height:200}}
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwETb79FkBcYyv-utiGLL96tY0As5VPuOBIg&usqp=CAU'}}
      />
      <Image
        style={styles.image} 
        source={require('./assets/sim.jpg')}
      />
    </View>
  )
}
  const styles=StyleSheet.create({
    container:{
      alignItems:'center',
      alignContent:'center',
      flex:1,
    },
    t1:{
      fontSize:10,
      fontWeight:'bold',
      color:'red',
      backgroundColor:'orange',
      padding:10,
      margin:30,
    },
    t2:{
      fontSize:10,
      fontWeight:'bold',
      color:'red',
      backgroundColor:'orange',
      padding:10,
      margin:20,
    },
    image:{
      width:370,height:200
    },
})