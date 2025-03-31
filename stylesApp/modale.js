import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent
    },
    modalView: {
      width: '85%',
      maxHeight: '80%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center',
    },
    contentContainer: {
      maxHeight: '70%',
      marginBottom: 15,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'left',
      lineHeight: 20,
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 15,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      flex: 1,
      padding: 15,
      borderRadius: 10,
      elevation: 2,
      marginHorizontal: 5,
    },
    buttonCancel: {
      backgroundColor: '#f8f8f8',
      borderWidth: 1,
      borderColor: '#cccccc',
    },
    buttonConfirm: {
      backgroundColor: '#2196F3',
    },
    buttonTextCancel: {
      color: '#333333',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonTextConfirm: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  