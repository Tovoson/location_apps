import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const BtnActualiser = ({click}: any) => {
  return (
    <View style={styles.container1}>
      <TouchableOpacity
        onPress={click}
        style={styles.container}
      >
        <Image
          source={icons.actualiser}
          style={styles.images}
        />
      </TouchableOpacity>
    </View>
  )
}

export default BtnActualiser

const styles = StyleSheet.create({
    images: {
        width: 17,
        height: 17
    },
    container: {
        display: 'flex',
        flex: 1,
        height: 30,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1
  
    },
    container1: {
        height: 30,
        width: 40,
        display: 'flex',
        margin: 10
    }
})