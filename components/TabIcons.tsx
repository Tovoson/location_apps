import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TabIcons = ({focused, icon, title}: any) => {

  if(focused){
      return(
      <ImageBackground style={styles.bgs} >
        <Image
          source={icon}
          style={styles.images}
        />
        <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
      </ImageBackground>
    )
  }

  return (
      <View >
        <Image source={icon} style={styles.images} />
      </View>
    )
}

export default TabIcons

const styles = StyleSheet.create({
  images: {
    height: 20,
    width: 20
  },
  bgs: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    minWidth: '112px',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  bygs: {
    // size-full item-center justify-center mt-4 rounded-full
    
  }
})