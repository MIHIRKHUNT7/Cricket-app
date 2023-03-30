import React, { useContext } from "react";
import { View, Modal, Image, Pressable, Text } from 'react-native';
import { deletePlayerStyles } from "../../styles/ModalStyles/DeletePlayerStyles";
import deleteImg from '../../assets/delete.png';
import { TeamContext } from "../../context/TeamContext";
import { TeamsContext } from "../../context/TeamsContext";
const DeletePlayer = ({ id, deleteShown, setDeleteShown }) => {
    const { teamId, setTeamId } = useContext(TeamContext);
    const { teams, setTeams } = useContext(TeamsContext);

    const handleConfirm = () => {
        const players = teams.filter((OurTeam) => OurTeam.id === teamId)[0].players;
        const OtherPlayers = players.filter((OurPlayer) => OurPlayer.id !== id);
        let TeamToUpdate = teams.filter((OurTeam) => OurTeam.id === teamId)[0];
        const OtherTeams = teams.filter((OurTeam) => OurTeam.id !== teamId);
        TeamToUpdate.players = [...OtherPlayers];
        setTeams([...OtherTeams, TeamToUpdate]);
        setDeleteShown(false);
    }

    return (
        <Modal
            transparent={true}
            visible={deleteShown}
        >
            <View style={deletePlayerStyles.overlay}>
                <View style={deletePlayerStyles.mainContainer}>
                    <Image source={deleteImg}
                        style={deletePlayerStyles.deleteIcon}
                    />
                    <View style={deletePlayerStyles.btnContainer}>
                        <Pressable style={deletePlayerStyles.confirmBtnStyles} onPress={handleConfirm}>
                            <Text>Confirm Delete</Text>
                        </Pressable>
                        <Pressable style={deletePlayerStyles.cancelBtnStyles} onPress={() => setDeleteShown(false)}>
                            <Text>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DeletePlayer