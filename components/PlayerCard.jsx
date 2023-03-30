import React, { useState } from "react";
import DeletePlayer from "./Modals/DeletePlayer";
import { playerCardStyles } from "../styles/playerCardStyles";
import EditPlayer from "./Modals/EditPlayer";
import { Image, View, Text, Pressable } from 'react-native'

const PlayerCard = ({ player }) => {
    const [deleteShown, setDeleteShown] = useState(false)
    const [editShown, setEditShown] = useState(false)

    return (
        <Pressable
            onLongPress={() => setDeleteShown(true)}
            style={playerCardStyles.cardContainer}
        >
            <View style={playerCardStyles.cardLeft}>
                <Image style={playerCardStyles.playerImgStyles} source={require('../assets/banner.jpg')} />
            </View>
            <View style={playerCardStyles.cardRight}>
                <View style={playerCardStyles.teamNameContainer}>
                    <Text style={playerCardStyles.teamNameText}>{player.fname + " " + player.lname}</Text>
                </View>
                <View style={playerCardStyles.type_matchCountContainer}>
                    <Text style={playerCardStyles.playerTypeText}>{player.playerType}</Text>
                    <View style={playerCardStyles.matchCountContainer}>
                        <Text style={playerCardStyles.matchCountText}>Match Count</Text>
                        <Text style={playerCardStyles.matchCountValue}> : {player.playedCount}</Text>
                    </View>
                    <View style={playerCardStyles.matchCountContainer}>
                        <Text style={playerCardStyles.matchCountText}>Age</Text>
                        <Text style={playerCardStyles.matchCountValue}> : {player.age}</Text>
                    </View>
                </View>
                <Pressable onPress={() => setEditShown(true)}
                    style={playerCardStyles.editBtn}>
                    <Text style={playerCardStyles.editBtnText}>EDIT</Text>
                </Pressable>
            </View>
            <DeletePlayer id={player.id} deleteShown={deleteShown} setDeleteShown={setDeleteShown} />
            <EditPlayer editShown={editShown} setEditShown={setEditShown} playerId={player.id} />
        </Pressable>
    )
}

export default PlayerCard
