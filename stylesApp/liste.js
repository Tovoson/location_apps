import { StyleSheet } from "react-native";

export const styleListe = StyleSheet.create({
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        marginVertical: 6,
        marginHorizontal: 10,
        backgroundColor: '#2D3142', // Couleur sombre
        padding: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    container2: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 4
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 16
    },
    text_primary: {
        fontSize: 17,
        fontWeight: "600",
        color: '#ffffff', // Texte blanc pour contraster avec le fond sombre
        marginBottom: 2
    },
    text_secondary: {
        fontSize: 14,
        fontWeight: '400',
        color: '#B3B8CD', // Gris clair pour le texte secondaire
        marginBottom: 1
    },
    img: {
        width: 22,
        height: 22,
        tintColor: '#ffffff' // Couleur blanche pour les icônes
    }
})