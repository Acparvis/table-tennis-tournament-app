import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playerlist from "./containers/player_list";
import Playerinput from "./containers/player_input";



export default () => (
    <div>
        <Playerinput />
        <Playerlist />
    </div>
);
