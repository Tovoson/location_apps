import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Formulaire from '@/components/formulaire'
import MyHistogram from '@/components/histo'

const Accueil = () => {
  return (
    <ScrollView>
      <MyHistogram/>
    </ScrollView>
  )
}

export default Accueil

const styles = StyleSheet.create({})