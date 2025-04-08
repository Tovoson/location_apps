import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: "93%",
        margin: 11.5,
        height: 90
        // gap: 5
    },
    element: {
        display: "flex",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        height: 80,
        borderRadius: 10
        // width: 100
    }
})