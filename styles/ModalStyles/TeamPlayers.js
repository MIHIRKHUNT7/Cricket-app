import { StyleSheet } from "react-native";

export const teamPlayerStyles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        height: 58,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textStyles: {
        fontSize: 20
    },
    addImgStyles: {
        width: 40,
        height: 45
    }
});