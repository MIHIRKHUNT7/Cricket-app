import { createContext } from "react";
import React, { useState } from "react";

export const TeamsContext = createContext();
export const TeamsProvider = ({ children }) => {
    const [teams, setTeams] = useState([]);
    return (
        <TeamsContext.Provider value={{ teams, setTeams }}>
            {children}
        </TeamsContext.Provider>
    )
}

export default TeamsProvider;