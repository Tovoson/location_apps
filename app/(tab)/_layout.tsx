import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabIcons from '@/components/TabIcons'
import { icons } from '@/constants/icons'

const layout = () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        },
        tabBarStyle: {
          backgroundColor: '#273c75',
          // marginBottom: 20,
          // borderRadius: 50
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({focused}) =>{
            return <TabIcons 
                      focused={focused}
                      icon={icons.accueil}
                      title='Home'
                   /> 
          }
        }}
      />
      <Tabs.Screen
        name='accueil'
        options={{
          headerShown: false,
          title: 'Graphe',
          tabBarIcon: ({focused}) =>{
            return <TabIcons 
                      focused={focused}
                      icon={icons.graphe}
                      title='Home'
                   /> 
          }
        }}
      />
    </Tabs>
  )
}

export default layout

const styles = StyleSheet.create({
    
})