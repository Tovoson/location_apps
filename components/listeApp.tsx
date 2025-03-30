import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fakeData } from "@/fakedata/fakeApp"
import { icons } from '@/constants/icons'
import { styleListe } from "@/stylesApp/liste"

const ListeApp = () => {

    const observation = (loyer: number) =>{
        if(loyer < 1000){
            return 'Bas'
        } 
        else if(loyer >= 1000 && loyer <= 5000){
            return "Moyenne"
        }else{
            return "Elevé"
        }
    }
  return (
    <View>
      <FlatList
        // horizontal={true}
        data={fakeData}
        keyExtractor={item => item.numApp}
        showsHorizontalScrollIndicator={false}
        renderItem={
          ({item})=>{
            return(
                
              <View style={styleListe.container1}>
                <View style={styleListe.container2}>
                    <Text style={styleListe.text_primary}>{item.Design}</Text>
                    <Text style={styleListe.text_secondary}>{item.loyer}</Text>
                    <Text style={styleListe.text_secondary}>{observation(item.loyer)}</Text>
                </View>
                <View style={styleListe.container3}>
                    <TouchableOpacity>
                        <Image source={icons.modifier} style={styleListe.img} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={icons.supprimer} style={styleListe.img} />
                    </TouchableOpacity>                    
                </View>
              </View>
            )
          }
        }
      />
    </View>
  )
}

export default ListeApp

const styles = StyleSheet.create({})