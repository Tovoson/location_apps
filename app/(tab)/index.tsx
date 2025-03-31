import AffichageDetails from "@/components/affichageDetais";
import Formulaire from "@/components/formulaire";
import ListeApp from "@/components/listeApp";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  const [app, setApp] = useState()
  return (
    <ScrollView>
      <Formulaire app ={app} />
      <ListeApp setApp = {setApp} />
      <AffichageDetails/>
    </ScrollView>
  );
}
