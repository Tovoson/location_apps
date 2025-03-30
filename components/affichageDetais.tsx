import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { style } from '@/stylesApp/AffichageDetails'
import { fakeData } from "@/fakedata/fakeApp"

const AffichageDetails = () => {

    const loyerMax = () =>{

        let Max = fakeData[0].loyer
        for (let i = 0; i < fakeData.length; i++){
            if (fakeData[i].loyer > Max){
                Max = fakeData[i].loyer
            }
        }
        return Max

    }

    const loyerMin = () =>{
        let Min = fakeData[0].loyer
        for (let i = 0; i < fakeData.length; i++) {
            if( fakeData[i].loyer < Min ){
                Min = fakeData[i].loyer
            }
        }
        return Min 
    }

    const loyerTotal = () =>{
        let total = 0
        for ( let i = 0; i < fakeData.length; i++){
            total += fakeData[i].loyer
        }

        return total
    }

    useEffect(() => {
      
        loyerTotal()
        loyerMax()
        loyerMin()
    
    }, [])
    

  return (
    <View style={style.container} >
      <View style={style.element}>
        <Text>Total des loyers</Text>
        <Text>{loyerTotal()}</Text>
      </View>
      <View style={style.element}>
        <Text>Loyer Maximal</Text>
        <Text>{loyerMax()}</Text>
      </View>
      <View style={style.element}>
        <Text>Loyer Minimal</Text>
        <Text>{loyerMin()}</Text>
      </View>
    </View>
  )
}

export default AffichageDetails