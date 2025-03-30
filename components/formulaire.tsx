import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {style} from '@/stylesApp/formulaires'
import { icons } from '@/constants/icons'

const Formulaire = () => {

    const [numApp, setnumApp] = useState('')
    const [design, setDesign] = useState('')
    const [loyer, setLoyer] = useState()

  const ajout = () => {}

  return (
    <View style={style.container}>
      <TextInput 
        value={numApp}
        onChangeText={setnumApp}
        placeholder="numéro de l'appartement"
        style={style.input}
        />
      <TextInput 
        style={style.input}
        value={design}
        onChangeText={setDesign}
        placeholder="Design"
        />
      <TextInput 
        style={style.input}
        value={loyer}
        onChangeText={setLoyer}
        placeholder="Loyer"
      />

        <TouchableOpacity
            style={style.btn}
            onPress={ajout}
        >
            <Image source={icons.ajouter} style={style.img} />
        </TouchableOpacity>
    </View>
  )
}

export default Formulaire

const styles = StyleSheet.create({})