import React, { useContext, useState } from "react";
import { View, Modal, Pressable, Text, ScrollView, Alert, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { TeamsContext } from "../../context/TeamsContext";
import { addPlayerStyles } from "../../styles/ModalStyles/AddPlayerStyles";
import { CustomInput } from "../CustomInput";
import { DropDown } from "../Dropdown";
import { isNameValid, isAgeValid, isRunsValid, isCountryValid, isMatchCountValid } from '../../utils/validations.js';
import { options } from "../../utils/dropDownOptions";

const AddPlayer = ({ addPlayerShown, setAddPlayerShown, teamId }) => {
    const { teams, setTeams } = useContext(TeamsContext);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [numRuns, setRuns] = useState('');
    const [age, setAge] = useState('');
    const [type, setType] = useState('');
    const [matchCount, setMatchCount] = useState('');
    const [Country, setCountry] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        setType(option.value);
        setIsOpen(!isOpen);
    }

    const handleAddPlayer = () => {
        if (isNameValid(fname) &&
            isNameValid(lname) &&
            isAgeValid(age) &&
            isRunsValid(numRuns) &&
            isCountryValid(Country) &&
            isMatchCountValid(matchCount)) {
            const team = teams.filter((OurTeam) => OurTeam.id === teamId)[0];
            const players = [...team.players];
            let newId;
            if (players.length === 0) // if no players, first player id 1
                newId = 1;
            else {
                const maxIdObject = players.reduce(((accumulator, current) => accumulator.id > current.id ? accumulator : current), 0);
                newId = maxIdObject.id + 1;
            }
            const newPlayer = {
                id: newId,
                fname,
                lname,
                numRuns,
                age,
                playerType: type,
                playedCount: matchCount,
                country: Country
            }
            team.players = [...players, newPlayer];
            setTeams(teams.map((OurTeam) => OurTeam.id === teamId ? team : OurTeam));
            setFname('');
            setLname('');
            setRuns('')
            setAge('');
            setMatchCount('');
            setCountry('');
            setAddPlayerShown(false);
        }
        else
            Alert.alert("Please enter details properly !!");
    }

    return (
        <Modal
            transparent={true}
            visible={addPlayerShown}
            animationType={'slide'}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : 'height'}>
                <SafeAreaView>
                    <View style={addPlayerStyles.overlay}>
                        <ScrollView style={addPlayerStyles.mainContainer}
                            contentContainerStyle={{ alignItems: 'center' }}>
                            <Text>Player Details</Text>
                            <CustomInput
                                placeholder="Enter First Name..."
                                onChangeText={(fName) => setFname(fName)}
                                maxLength={12}
                                validation={(text) => isNameValid(text)}
                                name="First Name"
                            />
                            <CustomInput
                                placeholder="Enter Last Name..."
                                onChangeText={(lName) => setLname(lName)}
                                maxLength={12}
                                validation={(text) => isNameValid(text)}
                                name="Last Name"
                            />
                            <CustomInput
                                placeholder="Age..."
                                onChangeText={(AGE) => setAge(AGE)} maxLength={3}
                                inputMode={'numeric'}
                                validation={(_age_) => isAgeValid(_age_)}
                                name="Age"
                            />
                            <CustomInput
                                placeholder="Runs"
                                onChangeText={(_runs) => setRuns(_runs)}
                                maxLength={6}
                                inputMode={'numeric'}
                                validation={(_runs_) => isRunsValid(_runs_)}
                                name="No of runs"
                            />
                            <CustomInput
                                placeholder="Country..."
                                onChangeText={(cntry) => setCountry(cntry)}
                                maxLength={12}
                                validation={(_country_) => isCountryValid(_country_)}
                                name="country name"
                            />
                            <DropDown
                                options={options}
                                onSelect={(option) => handleSelect(option)}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                type={type}
                            />
                            <CustomInput
                                placeholder="No. of match played ..."
                                onChangeText={(mno) => setMatchCount(mno)}
                                maxLength={3}
                                inputMode={'numeric'}
                                validation={(match_count) => isMatchCountValid(match_count)}
                                name="No of matches"
                            />
                            <View style={addPlayerStyles.btnContainer}>
                                <Pressable style={addPlayerStyles.addBtnStyles} onPress={handleAddPlayer}>
                                    <Text>Add Player</Text>
                                </Pressable>
                                <Pressable style={addPlayerStyles.cancelBtnStyles} onPress={() => setAddPlayerShown(false)}>
                                    <Text>Cancel</Text>
                                </Pressable>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export default AddPlayer