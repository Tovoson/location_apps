import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from '@/stylesApp/AffichageDetails'
// import { fakeData } from "@/fakedata/fakeApp"
import { fetchData } from '@/service/service'
import axios from 'axios'
import LoadingIndicator from './loading'
import { icons } from '@/constants/icons'

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
    <>
    
    <View style={style.container1} >
      <Text style={style.titre} >Statistiques</Text>
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => fetchData()}
          style={styles.container}
        >
          <Image
            source={icons.actualiser}
            style={styles.images}
          />
        </TouchableOpacity>
      </View>
      <View style={style.container}>
        <View style={style.tota}>
          <Text style={style.text} >Total des loyers</Text>
          <Text style={style.value} >{stats.total}</Text>
        </View>
        <View style={style.max}>
          <Text style={style.text}>Loyer Maximal</Text>
          <Text style={style.value}>{stats.max}</Text>
        </View>
        <View style={style.min}>
          <Text style={style.text}>Loyer Minimal</Text>
          <Text style={style.value}>{stats.min}</Text>
        </View>
      </View>
    </View>
    </>
  )
}

export default AffichageDetails

const styles = StyleSheet.create({
  images: {
      width: 17,
      height: 17
  },
  container: {
    backgroundColor: '#3498db', // Bleu clair
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,

  },
  container1: {
      height: 30,
      width: 40,
      display: 'flex',
      marginLeft: 13,
      marginTop: 10
  }
})