import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import forms from "@/styles/formulaire"

const Formulaire = () => {

    const [numApp, setnumApp] = useState('')
    const [design, setDesign] = useState('')
    const [loyer, setLoyer] = useState()

  return (
    <View style={forms}>
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
            onPress={ajouter}
        >
            
        </TouchableOpacity>
    </View>
  )
}

export default Formulaire

const styles = StyleSheet.create({})