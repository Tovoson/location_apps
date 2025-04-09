import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {style} from '@/stylesApp/formulaires'
import { icons } from '@/constants/icons'
import {addData, fetchData, updateData} from '@/service/service'
import CustomModal from './modale'
import Modale2 from './modale2'

const Formulaire = ({app, setRefresh}: any) => {
    
  const [modalVisible, setModalVisible] = useState(false);
    const [formData, setformData] = useState({
      design: '',
      loyer: ''
    });
    const [isExist, setIsExist] = useState(false)
    const [text, setText] = useState('')
    

    useEffect(() => {
      if(app){
        setformData(app);
        setIsExist(true)
      }else{
        return setformData({
          design: '',
          loyer: ''
        })
      }
    
    }, [app])

  const ajout = () => {
    if (Object.values(formData).every(value => value !== "")) {
      if (Object.values(formData).some(value => value.trim() !== "")) {
        addData(formData);
        setText("Ajout effectué")
        setModalVisible(true)
        reset()
      }else{
        setText("il y un espace vide dedans")
        setModalVisible(true)
      }
    } else{
      setText("au moins un champ vide")
      setModalVisible(true)
    }
  }

  const modifier = () => {
    if (Object.values(formData).every(value => value !== "")) {
      if (Object.values(formData).some(value => typeof value === 'string' ? value.trim() !== "" : true)) {
        updateData(formData)
        setText("Modification effectué")
        setModalVisible(true)
        setIsExist(true)
        reset()
      }else{
        setText("il y un espace vide dedans")
        setModalVisible(true)
      }
    } else{
      setText("au moins un champ vide")
      setModalVisible(true)
    }
  }
  const reset = () => {
    setformData({
      design: '',
      loyer: ''
    });
    setIsExist(false)
  }
  const handleChange = (field: string, value: any) => {
    setformData({...formData, [field]: value})
  }

  return (
    <View style={style.container}>
      <Text style={style.text} >{!isExist ? "Ajouter Appartement" : "Modifier Appartement"}</Text>
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

      <View style={style.btnContainer} >
        <TouchableOpacity
            style={ !isExist ? style.btnAjouter : style.btnModifier}
            onPress={isExist ? modifier : ajout}
        >
            <Image source={isExist ? icons.modifier : icons.ajouter} style={style.img} />
        </TouchableOpacity>
        <TouchableOpacity
            style={style.btnReinitialiser}
            onPress={reset}
            >
            <Image source={icons.reset} style={style.img} />
        </TouchableOpacity>
      </View>

        <Modale2
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          // onConfirm={handleConfirm}
          message={text}
          // delData={delData}

        />
    </View>
  )
}

export default Formulaire

const styles = StyleSheet.create({})