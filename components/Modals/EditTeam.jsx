import React, { useContext, useState } from "react";
import { View, Modal, TextInput, Pressable, Text } from 'react-native';
import { addTeamStyles } from "../../styles/ModalStyles/AddTeamStyles";
import { TeamsContext } from "../../context/TeamsContext";
const EditTeam = ({ editShown, setEditShown, id }) => {
    const { teams, setTeams } = useContext(TeamsContext);
    const [team, setTeam] = useState('');

    let teamToUpdate = teams.filter((OurTeam) => OurTeam.id === id)[0];
    const handleSave = () => {
        teamToUpdate.team_name = team;
        setTeams(teams.map((team) => team.id === id ? teamToUpdate : team));
        setEditShown(false);
    }

    return (
        <Modal
            transparent={true}
            visible={editShown}
        >
            <View style={addTeamStyles.overlay}>
                <View style={addTeamStyles.mainContainer}>
                    <TextInput placeholder="Enter Team Name..."
                        onChangeText={(text) => setTeam(text)}
                        maxLength={12}
                        defaultValue={teamToUpdate.team_name}
                    />
                    <View style={addTeamStyles.btnContainer}>
                        <Pressable style={addTeamStyles.addBtnStyles}
                            onPress={handleSave}>
                            <Text>Save Changes</Text>
                        </Pressable>
                        <Pressable style={addTeamStyles.cancelBtnStyles}
                            onPress={() => setEditShown(false)}>
                            <Text>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default EditTeam