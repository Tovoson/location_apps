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
    addData(formData);
    // setRefresh(true)
    setModalVisible(true)
    reset()
  }
  const modifier = () => {
    updateData(formData)
    setModalVisible(true)
    reset()
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
            onPress={isExist ? modifier : ajout}
        >
            <Image source={isExist ? icons.modifier : icons.ajouter} style={style.img} />
        </TouchableOpacity>
        <TouchableOpacity
            style={style.btn}
            onPress={reset}
        >
            <Image source={icons.reset} style={style.img} />
        </TouchableOpacity>

        <Modale2
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          // onConfirm={handleConfirm}
          message={isExist ? "Modification effectué" : "Ajout effectué"}
          // delData={delData}

        />
    </View>
  )
}

export default Formulaire

const styles = StyleSheet.create({})