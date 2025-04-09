import { StyleSheet } from "react-native";


const buttonBaseStyle = {
    paddingVertical: 12,
    // paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginVertical: 5,
    width: '100%'
  };

export const style = StyleSheet.create({
    input:{
        width: 350,
        // margin: 10,
        // padding: 10,
        // borderWidth: 2,
        // borderColor: 'grey',
        // borderRadius: 5

        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: '#333',


    },
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        width: '100%',
        minHeight: 300,
        gap: 5,
        backgroundColor: '#dfe6e9',
        marginBottom: 10,
        paddingBottom: 30
    },
    btnAjouter:{
        ...buttonBaseStyle,
        backgroundColor: '#4CAF50',
        
    },
    btnModifier:{
        ...buttonBaseStyle,
        backgroundColor: '#3498db',
        
    },
    btnReinitialiser:{
        ...buttonBaseStyle,
        backgroundColor: '#FF9800',
        
    },
    btnContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        // gap: 30,
        width: '93%'
    },
    img: {
        width: 25,
        height: 25
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#444',
        marginBottom: 15,
        marginTop: 20,
        textTransform: 'uppercase',
    }
})