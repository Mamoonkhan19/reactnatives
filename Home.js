import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    let [datas,setdatas] = useState([]);
    let [loding,setloding] = useState(false)
    useEffect(()=>{
        let getdata = async ()=>{
            try {
                setloding(true)
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await  response.json();
                
                setdatas(data)
                
            } catch (error) {
                console.warn(error)
            }finally{
                setloding(false)
                
            }
            
        }
        console.warn(datas)
        getdata()
    },[])
    if(loding){
    return(               
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator
        
        size={100}
        color={"gray"}
        
        />
        </View>
    )
}
    return (
      
        <View style={{backgroundColor:'black'}}>
      <Text style={{fontSize:20,color:'white',alignSelf:'center'}}>Home</Text>
   {datas?.map((item)=>{
    return(
        <ScrollView>

        <View style={{backgroundColor:'gray',marginTop:10,borderRadius:10,paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,justifyContent:'space-evenly'}}>
            <Text>category : {item.category}</Text>
            <Text>price : {item.price}</Text>
            <Text>title: {item.title}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('gotodetail',{D:item.description,rating:item.rating.rate})} >
                <Text>Detail</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    

)

})}
  
            
        
      
      
    </View>
  )
}

export default Home