import React from 'react';
import './App.css';
import Playerlist from "./containers/player_list";
import Playerinput from "./containers/player_input";
import TournamentTree from "./containers/tournament_tree";



export default () => (
    <div>
        <Playerinput />
        <Playerlist />
        <TournamentTree />
    </div>
);
