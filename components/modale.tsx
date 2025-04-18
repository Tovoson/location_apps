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

const CustomModal = ({ visible, onClose, onConfirm, message, delData }: any) => {
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
          <Text style={styles.modalTitle}>Titre</Text>
          <Text style={styles.modalText}>design: {delData.design} </Text>
          <Text style={styles.modalText}>loyer : {delData.loyer} </Text>
          
          
          
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
                onConfirm(delData.id);
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