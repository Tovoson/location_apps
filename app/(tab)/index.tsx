import AffichageDetails from "@/components/affichageDetais";
import Formulaire from "@/components/formulaire";
import MyHistogram from "@/components/histo";
import ListeApp from "@/components/listeApp";
import LoadingIndicator from "@/components/loading";
import {images} from '@/constants/image'
import { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [app, setApp] = useState()
  const [refresh, setRefresh] = useState(false)
  const [Hloading, setHLoading] = useState(false)
  
  const [stat, setStat] = useState({
    min: '',
    max: '',
    total: ''
  })

  console.log("stata", stat)

  return (
    <ScrollView>
      <ImageBackground
        source={images.bg}
          style={styles.backgroundImage}
          imageStyle={styles.imageStyle}
      >

        <Formulaire app ={app}  setRefresh={setRefresh} />
        <ListeApp setApp = {setApp} refresh={refresh} />
        <AffichageDetails setStat={setStat} setHLoading ={setHLoading} />
        {Hloading ? 
          <MyHistogram stat={stat} /> 
          : 
          <LoadingIndicator message="Chargement du graphe" />
        }
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    resizeMode: 'cover', // 'cover', 'contain', ou 'stretch'
  },
  container: {
    flex: 1,
    // Vous pouvez ajouter un overlay semi-transparent ici si nécessaire
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
  }
});