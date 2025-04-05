import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fakeData } from "@/fakedata/fakeApp"
import { icons } from '@/constants/icons'
import { styleListe } from "@/stylesApp/liste"
import CustomModal from './modale'
import {fetchData} from '@/service/service'

const ListeApp = ({setApp, refresh}: any) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [liste, setListe] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    console.log(liste) 
    fetchData(setListe, setIsLoading)
  }, [])

  useEffect(() => {
    console.log(liste) 
    fetchData(setListe, setIsLoading)
  }, [refresh])
  

  const handleConfirm = (data: string) => {
    console.log('Données confirmées:', data);
    // Traitement des données
  };

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

  const selectItem = (item: any) => {
    setApp(item)
    // console.log(item)
  }

  if(isLoading){
        return(
          <View>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>)
        
  }

  const renduLoyer = ({item}: any) =>{
    return(
      
        <View style={styleListe.container1}>
          <View style={styleListe.container2}>
          <Text style={styleListe.text_primary}>{item.design}</Text>
              <Text style={styleListe.text_secondary}>{item.loyer}</Text>
              <Text style={styleListe.text_secondary}>{observation(item.loyer)}</Text>
          </View>
          <View style={styleListe.container3}>
          <TouchableOpacity
                onPress={() => selectItem(item)}
                >
                <Image 
                source={icons.modifier} 
                style={styleListe.img} 
                
                />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image 
                source={icons.supprimer} 
                style={styleListe.img}
                onPress={() => setModalVisible(true)} />
                </TouchableOpacity>                    
          </View>
          
        </View>
      }     
    )
  

  return (
    <View>
      <FlatList
        // horizontal={true}
        data={liste}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={renduLoyer}
      />
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirm}
      />
    </View>
  )
}

export default ListeApp

const styles = StyleSheet.create({})