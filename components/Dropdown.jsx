import { TouchableOpacity, View, Text } from "react-native";
import { dropDownStyles } from "../styles/DropDownStyles";

export const DropDown = ({ options, onSelect, isOpen, setIsOpen, type, value }) => {
    return (
        <View style={dropDownStyles.container}>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                <Text>{(type ? type : "Player Type...") || (value ?? value)}</Text>
            </TouchableOpacity>
            {isOpen && (
                <View>
                    {options.map((option) => (
                        <TouchableOpacity style={dropDownStyles.container} key={option.value} onPress={() => onSelect(option)}>
                            <Text>{option.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}