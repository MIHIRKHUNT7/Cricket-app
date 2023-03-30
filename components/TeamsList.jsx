import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import TeamCard from "./TeamCard";
import { TeamsContext } from "../context/TeamsContext";
import TeamProvider from "../context/TeamContext";
import { teamListStyles } from "../styles/TeamsListStyles";
import { TeamsEmpty } from "./ListEmptyTeams";

export const TeamsList = () => {
    const { teams, setTeams } = useContext(TeamsContext)
    return (
        <TeamProvider>
            <FlatList
                data={teams}
                ListEmptyComponent={<TeamsEmpty />}
                renderItem={({ item }) => <TeamCard team={item} />}
                keyExtractor={(item, index) => item.id}
                ListFooterComponent={<View style={teamListStyles.listStyle} />}
            />
        </TeamProvider>
    )
}