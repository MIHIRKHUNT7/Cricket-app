import { StyleSheet, Platform } from "react-native";
export const customInputStyles = StyleSheet.create({
    container: {
        paddingVertical: Platform.OS === 'ios' ? 15 : 2,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15,
        width: '100%',
        marginVertical: 10
    }
})