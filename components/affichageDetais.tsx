import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from '@/stylesApp/AffichageDetails'
// import { fakeData } from "@/fakedata/fakeApp"
import { fetchData } from '@/service/service'
import axios from 'axios'
import LoadingIndicator from './loading'

const AffichageDetails = ({setStat, setHLoading}: any) => {
  
  const [stats, setStats] = useState({
    min: '',
    max: '',
    total: ''
  })
  const [loading, setLoading] = useState(false)


    // Fonction pour récupérer les données de l'API
  const fetchData = async () => {
    try {
      setLoading(true)
      const reponse = await axios.get("http://127.0.0.1:8000/appart/liste/")
      const data = reponse.data;
      const liste = Array.isArray(data) ? data : (data.results || data.data || Object.values(data));

        const maxLoyer = loyerMax(liste);
        const minLoyer = loyerMin(liste);
        const totalLoyer = loyerTotal(liste)
        

        setStats({
          min: minLoyer,
          max: maxLoyer,
          total: totalLoyer
        })

        setLoading(false)

        setStat({
          min : minLoyer, 
          max : maxLoyer, 
          total : totalLoyer
        })
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
  };

  const loyerTotal = (liste: string | any[]) =>{
    if (!liste || liste.length === 0) {
      return null; // Gérer le cas où la liste est vide
    }

    let total = 0
    for ( let i = 0; i < liste.length; i++){
        total += liste[i].loyer
    }

    return total
  }

  const loyerMin = (liste: string | any[]) =>{

    if (!liste || liste.length === 0) {
      return null; // Gérer le cas où la liste est vide
    }

    let Min = liste[0].loyer
    for (let i = 0; i < liste.length; i++) {
        if( liste[i].loyer < Min ){
            Min = liste[i].loyer
        }
    }
    return Min 
  }

// Modifiez votre fonction loyerMax pour prendre la liste en paramètre
  const loyerMax = (liste: string | any[]) => {
    if (!liste || liste.length === 0) {
          return null; // Gérer le cas où la liste est vide
    }
    
    let Max = liste[0].loyer; 
    for (let i = 0; i < liste.length; i++) {
        if (liste[i].loyer > Max) {
            Max = liste[i].loyer;
        }
    }
    return Max;
  };


  useEffect(() => {
    fetchData()
    setHLoading(!loading)
  }, [])

  if(loading){
    return(<LoadingIndicator message='Chargement stat...' />)
  }

  return (
    <View style={style.container} >
      <View style={style.element}>
        <Text>Total des loyers</Text>
        <Text>{stats.total}</Text>
      </View>
      <View style={style.element}>
        <Text>Loyer Maximal</Text>
        <Text>{stats.max}</Text>
      </View>
      <View style={style.element}>
        <Text>Loyer Minimal</Text>
        <Text>{stats.min}</Text>
      </View>
    </View>
  )
}

export default AffichageDetails