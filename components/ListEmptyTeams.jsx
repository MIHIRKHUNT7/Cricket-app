import React from "react";
import { View, Image } from "react-native";
import { noTeamStyles } from "../styles/EmptyListStyles";

export const TeamsEmpty = () => {
    return (
        <View>
            <Image source={require('../assets/noTeams.png')}
                style={noTeamStyles.noTeamsImg} />
        </View>
    )
}