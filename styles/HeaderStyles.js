import { StyleSheet } from "react-native";
export const headerStyles = StyleSheet.create({
    backgroundImgStyles: {
        height: 200,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    appTitleStyles: {
        fontWeight: '600',
        fontSize: 24,
        paddingLeft: 15,
        color: 'white',
        marginTop: 10
    },
    btn: {
        width: '50%',
        paddingVertical: 10,
        marginBottom: 8,
        marginHorizontal: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10
    },
    btnText: {
        fontWeight: '800'
    },
    yourTeamsContainer: {
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    yourTeamsText: {
        fontSize: 20,
        fontWeight: '400'
    },
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