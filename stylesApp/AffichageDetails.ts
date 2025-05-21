import { StyleSheet } from "react-native";

import { ViewStyle } from "react-native";

const boxBase: ViewStyle = {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
}


export const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: "93%",
        margin: 11.5,
        height: 150,
        // backgroundColor: 'pink'
        gap: 5
    },
    container1: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#dfe6e9',
        marginBottom: 10
        // gap: 5
    },
    
    tota:{
        ...boxBase,
        backgroundColor: '#3498db',
    },
    min:{
        ...boxBase,
        backgroundColor: '#FF9800',
    },
    max:{
        ...boxBase,
        backgroundColor: '#4CAF50',
    },
    text:{
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.9)',
        textTransform: 'uppercase',
    },
    value:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 6,
    },
    titre: {
        fontSize: 18,
        fontWeight: '600',
        color: '#444',
        marginBottom: 15,
        marginTop: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
    
    },
})