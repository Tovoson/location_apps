import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    input:{
        width: 350,
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 5

    },
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        width: '100%',
        minHeight: 300,
        gap: 5,
        borderBottomWidth: 2
    },
    btn:{
        padding: 5,
        margin: 5,
        alignItems: 'center',
        width: '93%',
        backgroundColor: 'green',
        borderRadius: 5
        
    },
    img: {
        width: 30,
        height: 30
    }
})