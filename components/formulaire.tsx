import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {style} from '@/stylesApp/formulaires'
import { icons } from '@/constants/icons'

const Formulaire = ({app}: any) => {

    const [formData, setformData] = useState({
      numApp: '',
      design: '',
      loyer: ''
    })

    useEffect(() => {
      if(app){
        setformData(app)
      }else{

        
        return setformData({
        numApp: '',
        design: '',
        loyer: ''
        })
      }
    
    }, [app])
    

  const ajout = () => {}
  const handleChange = (field: string, value: any) => {
    setformData({...formData, [field]: value})
  }

  return (
    <View style={style.container}>
      <TextInput 
        value={formData.numApp}
        onChangeText={(text) => handleChange('numApp', text)}
        placeholder="numéro de l'appartement"
        style={style.input}
        />
      <TextInput 
        style={style.input}
        value={formData.design}
        onChangeText={(text) => handleChange('design', text)}
        placeholder="Design"
        />
      <TextInput 
        style={style.input}
        value={formData.loyer}
        onChangeText={(text) => handleChange('loyer', text)}
        placeholder="Loyer"
      />

        <TouchableOpacity
            style={style.btn}
            onPress={ajout}
        >
            <Image source={app ? "Modifier" : icons.ajouter} style={style.img} />
        </TouchableOpacity>
    </View>
  )
}

export default Formulaire

const styles = StyleSheet.create({})