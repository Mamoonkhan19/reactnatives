import { View, Text ,Image,StyleSheet, Button} from 'react-native'
import React from 'react'

const Detail = ({navigation,route}) => {
    const {D} = route.params || {}
    const {rating} = route.params||{}
    
  return (
    <View style={{flex:1,justifyContent:'center',backgroundColor:"gray"
    }}>
      <Text style={{alignSelf:'center',fontSize:29}}>Detail</Text>
      <Text style={{textDecorationLine:'underline',textShadowRadius:10,textAlign:"center"}}> rating : {rating}</Text>
      <Text>{D}</Text>
      <Button title='more detail' onPress={()=>navigation.navigate('Deat')}/>
    </View>
  )
}

export default Detail
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
  });