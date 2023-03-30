import React, { useContext, useState } from "react";
import { View, Modal, Pressable, Text, ScrollView, KeyboardAvoidingView, Platform, Alert, SafeAreaView } from 'react-native';
import { editPlayerStyles } from "../../styles/ModalStyles/EditPlayerStyles";
import { CustomInput } from "../CustomInput";
import { DropDown } from "../Dropdown";
import { TeamContext } from "../../context/TeamContext";
import { TeamsContext } from "../../context/TeamsContext";
import { isNameValid, isAgeValid, isRunsValid, isCountryValid, isMatchCountValid } from '../../utils/validations.js';
import { options } from "../../utils/dropDownOptions";

const EditPlayer = ({ playerId, editShown, setEditShown }) => {
    const { teamId, setTeamId } = useContext(TeamContext);
    const { teams, setTeams } = useContext(TeamsContext);
    const players = teams.filter((_team) => teamId === _team.id)[0].players;
    const player = players.filter((_player_) => _player_.id === playerId)[0];
    const [fname, setFname] = useState(() => player?.fname ?? '');
    const [lname, setLname] = useState(() => player?.lname ?? '');
    const [numRuns, setRuns] = useState(() => player?.numRuns ?? '');
    const [age, setAge] = useState(() => player?.age ?? '');
    const [type, setType] = useState(() => player?.playerType ?? '');
    const [matchCount, setMatchCount] = useState(() => player?.playedCount ?? '');
    const [Country, setCountry] = useState(() => player?.country ?? '');
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        setType(option.value);
        setIsOpen(!isOpen);
    }

    const handleSavePlayer = () => {
        if (isNameValid(fname) &&
            isNameValid(lname) &&
            isAgeValid(age) &&
            isRunsValid(numRuns) &&
            isCountryValid(Country) &&
            isMatchCountValid(matchCount)) {

            const playerNewData = {
                id: playerId,
                fname,
                lname,
                numRuns,
                age,
                playerType: type,
                playedCount: matchCount,
                country: Country
            }
            const teamToUpdate = teams.filter((_team_) => _team_.id === teamId)[0];// find team in which player belongs
            teamToUpdate.players = players.map((OurPlayer) => OurPlayer.id === playerId ? playerNewData : OurPlayer); // update team players
            setTeams(teams.map((team) => team.id === teamId ? teamToUpdate : team));
            setEditShown(false);
        }
        else
            Alert.alert("Please enter details properly !!");
    }

    return (
        <Modal
            transparent={true}
            visible={editShown}
            animationType={'slide'}
        >
            <SafeAreaView>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : 'height'}>
                    <View style={editPlayerStyles.overlay}>
                        <ScrollView style={editPlayerStyles.mainContainer} contentContainerStyle={editPlayerStyles.contentContainerStyles}>
                            <Text>Player Details</Text>
                            <CustomInput placeholder="Enter First Name..." onChangeText={(fName) => setFname(fName)} maxLength={12} validation={(text) => isNameValid(text)} name="First Name" value={player.fname} />
                            <CustomInput placeholder="Enter Last Name..." onChangeText={(lName) => setLname(lName)} maxLength={12} validation={(text) => isNameValid(text)} name="Last Name" value={player.lname} />
                            <CustomInput placeholder="Age..." onChangeText={(AGE) => setAge(AGE)} maxLength={3} inputMode={'numeric'} validation={(_age_) => isAgeValid(_age_)} name="Age" value={player.age} />
                            <CustomInput placeholder="Runs" onChangeText={(_runs) => setRuns(_runs)} maxLength={6} inputMode={'numeric'} validation={(_runs_) => isRunsValid(_runs_)} name="No of runs" value={player.numRuns} />
                            <CustomInput placeholder="Country..." onChangeText={(cntry) => setCountry(cntry)} maxLength={12} validation={(_country_) => isCountryValid(_country_)} value={player.country} />
                            <DropDown options={options} onSelect={(option) => handleSelect(option)} isOpen={isOpen} setIsOpen={setIsOpen} type={type} value={player.playerType} />
                            <CustomInput placeholder="No. of match played ..." onChangeText={(mno) => setMatchCount(mno)} maxLength={3} inputMode={'numeric'} validation={(match_count) => isMatchCountValid(match_count)} value={player.playedCount} />
                            <View style={editPlayerStyles.btnContainer}>
                                <Pressable style={editPlayerStyles.saveBtnStyles} onPress={handleSavePlayer}>
                                    <Text>Save</Text>
                                </Pressable>
                                <Pressable style={editPlayerStyles.cancelBtnStyles} onPress={() => setEditShown(false)}>
                                    <Text>Cancel</Text>
                                </Pressable>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </Modal>
    )
}

export default EditPlayer;