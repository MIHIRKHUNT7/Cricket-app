import { StyleSheet, Platform, StatusBar } from "react-native";

export const appStyles = StyleSheet.create({
    safeAreaStyles: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})