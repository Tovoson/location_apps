import AffichageDetails from "@/components/affichageDetais";
import Formulaire from "@/components/formulaire";
import MyHistogram from "@/components/histo";
import ListeApp from "@/components/listeApp";
import LoadingIndicator from "@/components/loading";
import { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [app, setApp] = useState()
  const [refresh, setRefresh] = useState(false)
  const [Hloading, setHLoading] = useState(false)
  const [afficheForm, setAfficheForm] = useState(false)
  
  const [stat, setStat] = useState({
    min: 0,
    max: 0,
    total: 0
  })

  console.log("stata", stat)

  return (
    <ScrollView>
        {
          afficheForm ? <Formulaire /> : ''
        }
        
        <ListeApp setApp = {setApp} refresh={refresh} setAfficheForm = {setAfficheForm} afficheForm = {afficheForm} />
        <AffichageDetails setStat={setStat} setHLoading ={setHLoading} />
        {Hloading ? 
          <MyHistogram stat={stat} /> 
          : 
          <LoadingIndicator message="Chargement du graphe" />
        }
    </ScrollView>
  );
}
