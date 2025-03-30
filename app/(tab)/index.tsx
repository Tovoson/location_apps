import AffichageDetails from "@/components/affichageDetais";
import Formulaire from "@/components/formulaire";
import ListeApp from "@/components/listeApp";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <Formulaire/>
      <ListeApp/>
      <AffichageDetails/>
    </ScrollView>
  );
}
