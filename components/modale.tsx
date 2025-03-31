import { styles } from '@/stylesApp/modale';
import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView
} from 'react-native';

const CustomModal = ({ visible, onClose, onConfirm }: any) => {
  const [inputText, setInputText] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Titre du Modal</Text>
          
          <ScrollView style={styles.contentContainer}>
            <Text style={styles.modalText}>
              Voici le contenu de votre modal. Vous pouvez ajouter ici vos informations
              ou formulaires nécessaires.
            </Text>
            
            <TextInput
              style={styles.input}
              placeholder="Entrez votre texte ici"
              value={inputText}
              onChangeText={setInputText}
            />
          </ScrollView>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonCancel]}
              onPress={onClose}
            >
              <Text style={styles.buttonTextCancel}>Annuler</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.button, styles.buttonConfirm]}
              onPress={() => {
                onConfirm(inputText);
                onClose();
              }}
            >
              <Text style={styles.buttonTextConfirm}>Confirmer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal