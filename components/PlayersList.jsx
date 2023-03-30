import React from "react";
import { FlatList } from "react-native";
import { PlayersEmpty } from "./ListEmptyPlayers";
import PlayerCard from "./PlayerCard";

export const PlayersList = ({ players }) => {
    return (
        <FlatList
            data={players}
            ListEmptyComponent={<PlayersEmpty />}
            renderItem={({ item }) => <PlayerCard player={item} key={item.id} />}
            keyExtractor={(item, index) => item.id}
        />
    )
}