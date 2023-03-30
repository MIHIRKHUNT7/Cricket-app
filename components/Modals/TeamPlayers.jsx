import React, { useState, useContext } from 'react';
import { View, Text, Pressable, Image, Modal, SafeAreaView } from 'react-native';
import addIcon from '../../assets/add.png';
import backIcon from '../../assets/left.png';
import { TeamsContext } from '../../context/TeamsContext';
import { PlayersList } from '../PlayersList';
import { teamPlayerStyles } from '../../styles/ModalStyles/TeamPlayers';
import AddPlayer from './AddPlayer';

const TeamPlayers = ({ id, visible, setVisible }) => {
    const [addPlayerShown, setAddPlayerShown] = useState(false);
    const { teams, setTeams } = useContext(TeamsContext);
    const team = teams.filter((_team) => _team.id === id)[0];
    const players = team.players;
    return (
        <Modal
            visible={visible}
            animationType='slide'
        ><SafeAreaView>
                <View style={teamPlayerStyles.mainContainer}>
                    <Pressable onPress={() => setVisible(false)}>
                        <Image source={backIcon} style={{ width: 40, height: 40 }} />
                    </Pressable>
                    <Text style={teamPlayerStyles.textStyles}>{team.team_name}</Text>
                    <Pressable onPress={() => setAddPlayerShown(true)}>
                        <Image source={addIcon} style={teamPlayerStyles.addImgStyles} />
                    </Pressable>
                </View>
                <PlayersList players={players} />
                <AddPlayer addPlayerShown={addPlayerShown} setAddPlayerShown={setAddPlayerShown} teamId={team.id} />
            </SafeAreaView>
        </Modal>
    );
}

export default TeamPlayers;