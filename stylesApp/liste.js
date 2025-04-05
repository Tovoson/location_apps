import { StyleSheet } from "react-native";

export const styleListe = StyleSheet.create({
    container1: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '93%',
        gap: 2,
        flexDirection: 'row',
        marginTop: 8,
        marginHorizontal: 12,
        backgroundColor: 'pink',
        padding: 10
        
    },
    container2: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 5
        
    },
    container3: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 15
    },

    text_primary: {
        fontSize: 17,
        fontWeight: "600"
    },
    text_secondary: {
        fontSize: 14,
        fontWeight: '300'
    },
    img: {
        width: 20,
        height: 20,
    }
})