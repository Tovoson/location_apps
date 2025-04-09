import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icons } from '@/constants/icons'
import { styleListe } from "@/stylesApp/liste"
import CustomModal from './modale'
import {fetchData, deleteService} from '@/service/service'
import LoadingIndicator from './loading'
import BtnActualiser from './BtnActualiser'

const ListeApp = ({setApp, refresh}: any) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [liste, setListe] = useState()
  const [isLoading, setIsLoading] = useState(false)
  // const [bg, setBg] = useState('#FF8C00')

  const [delData, setDelData] = useState({
    id: '',
    design: '',
    loyer: ''
  })

  const obs = {
    bas:{ 
      text: 'Bas', 
      color: '#FF8C00', 
      padding: 3,
      borderR: 5 
    },
    
    Moyenne:{ 
      text: 'Moyenne', 
      color: '#FFCC00', 
      padding: 3,
      borderR: 5  
    },
    eleve:{ 
      text: 'Elevé',
      color: '#4CAF50', 
      padding: 3,
      borderR: 5 
    }
  }


  useEffect(() => {
    console.log(liste) 
    fetchData(setListe, setIsLoading)
  }, [])

  const handleConfirm = (data: string) => {
    console.log('Données confirmées:', data);
    deleteService(data);
    fetchData(setListe, setIsLoading);
  };

  const deleteData = (item: any) => {
    setModalVisible(true);
    setDelData({
      id: item.id,
      design: item.design,
      loyer: item.loyer
    })
  };

  const observation = (loyer: number) =>{
        if (loyer < 1000) {
          return obs.bas;
        } else if (loyer >= 1000 && loyer <= 5000) {
          return obs.Moyenne;
        } else {
          return obs.eleve;
        }
  }

  const selectItem = (item: any) => {
    setApp(item)
    // console.log(item)
  }

  if(isLoading){
    console.log("Loading...")
        return(<LoadingIndicator message = "Chargement..." />)
        
  }

  const renduLoyer = ({item}: any) =>{

    const observationData = observation(item.loyer);

    return(
      
        <View style={styleListe.container1}>
          <View style={styleListe.container2}>
          <Text style={styleListe.text_primary}>{item.design}</Text>
              <Text style={styleListe.text_secondary}>{item.loyer}</Text>
              <Text 
                  style={{
                    backgroundColor: observationData.color, 
                    padding: observationData.padding,
                    borderRadius: observationData.borderR
                  }}
              >
                {observationData.text}
              </Text>
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
                <TouchableOpacity
                  onPress={() => deleteData(item)}
                >
                <Image 
                  source={icons.supprimer} 
                  style={styleListe.img}
                   />
                </TouchableOpacity>                    
          </View>
          
        </View>
           
    )
  
  }
  return (
    <View style={styleListe.container0}>
      <Text style={styleListe.titre} >Liste des appartements</Text>
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => fetchData(setListe, setIsLoading) }
          style={styles.container}
        >
          <Image
            source={icons.actualiser}
            style={styles.images}
          />
        </TouchableOpacity>
      </View>
      
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
        message=""
        delData={delData}
      />
    </View>
  )
}

export default ListeApp

const styles = StyleSheet.create({
  images: {
      width: 17,
      height: 17
  },
  container: {
      backgroundColor: '#3498db', // Bleu clair
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,

  },
  container1: {
      height: 30,
      width: 40,
      display: 'flex',
      margin: 10
  }
})