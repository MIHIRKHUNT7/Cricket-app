import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import AddTeam from './components/Modals/AddTeam.jsx';
import { TeamProvider } from './context/TeamContext';
import Header from './components/Header.jsx';
import { TeamsList } from './components/TeamsList.jsx';
import TeamsProvider from './context/TeamsContext.js';
import { appStyles } from './styles/AppStyles.js';

const App = () => {
  const [addTeamShown, setAddTeamShown] = useState(false)

  return (
    <SafeAreaView style={appStyles.safeAreaStyles}>
      <TeamsProvider >
        <TeamProvider>
          <Header openAdd={setAddTeamShown} />
          <AddTeam addShown={addTeamShown} setAddShown={setAddTeamShown} />
          <TeamsList />
        </TeamProvider>
      </TeamsProvider>
    </SafeAreaView>
  );
}

export default App;