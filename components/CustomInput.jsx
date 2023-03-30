import React, { useState } from "react";
import { View, TextInput, Text } from 'react-native';
import { customInputStyles } from "../styles/CustomInputStyles";

export const CustomInput = ({ onChangeText, maxLength, placeholder, name, inputMode, validation, value }) => {
    const [valid, setValid] = useState(true);

    const handleChange = (text) => {
        setValid(validation(text));
        onChangeText(text);
    }
    return (
        <View style={customInputStyles.container}>
            <TextInput onChangeText={(text) => handleChange(text)} maxLength={maxLength} placeholder={placeholder} inputMode={inputMode} defaultValue={value ?? ''} />
            {!valid && <Text style={{ color: 'red' }}>Please enter valid {name}</Text>}
        </View>
    )
}