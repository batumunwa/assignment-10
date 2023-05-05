import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useGetFoodsByFoodTypeIDQuery } from '../features/APISlice';

export default function FatFree() {
    const {data, error, isLoading} = useGetFoodsByFoodTypeIDQuery(1);//Fat Free Menu
  return (
    <View style={{padding:'5px'}}>
      {data?.map((item) => (
        <View style={{padding:'12px'}}>
          <Image
            source={{
            uri: item.image,
            }}
            style={{ width: 200, height: 200 }}/>
            <Text style = {styles.menuName}>{item.name}</Text>
            <View  style={styles.menuDescriptionContainer}>
              <Text style={{fontStyle:'italic'}}>{item.description}</Text>
               <View
                style={{
                    flexDirection: 'row',
                }}>
                <View style={{flex: 0.4}}>
                    <View style={{backgroundColor:'#d46201', height:'40px', fontWeight:'bold', color:'#ffffff', alignItems: 'center',flex: 1, justifyContent: 'center'}}>
                      ${item.price}
                    </View>
                </View>
                <View style={{flex: 0.4}}/>
                <View style={{flex: 0.2}}>
                    <Button
                        title="Buy"
                        color="#FF3D00"
                    />
                </View>
                </View>
            </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: '30px',
    color: 'red',
  },
  menuName:{
    fontSize:'18px',
    fontWeight:'bold'
  },
  menuDescription:{
    fontSize:'14px',
    fontStyle:'italic'
  },
  menuDescriptionContainer:{
    flexGrow:1,
    width:300,
    flexDirection:"column",
    justifyContent:"center",
  },
})