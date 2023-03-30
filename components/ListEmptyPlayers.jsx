import React from "react";
import { View, Image } from "react-native";
import { noPlayerStyles } from "../styles/EmptyListStyles";

export const PlayersEmpty = () => {
    return (
        <View>
            <Image source={require('../assets/noPlayers.png')}
                style={noPlayerStyles.noTeamsImg} />
        </View>
    )
}