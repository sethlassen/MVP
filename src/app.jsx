import React from 'react';
import ReactDOM from 'react-dom'

const axios = require('axios');

import TeamsTable from './teamsTable.jsx'
import PlayerForms from './playerForms.jsx'
import MatchedPlayersList from './matchedPlayersList.jsx'
import PlayerStats from './playerStats.jsx'

import styled from 'styled-components'

const Outer = styled.div`
  background-color: blue;
  display: flex;
`;

const Forms = styled.div`
  width: 50%;
  background-color: green;
`;

const Form2 = styled.div`
  display: inline;
  margin-left: 50%
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerOne: '',
      playerOneMatchesByID: [],
      matchedPlayers: [],
      chosenPlayerOneId: '',
      playerOneStats: [],
      playerOneClickedName: ''
    }
  }

  handleNameChange(event) {
    //event.preventDefault();
    this.setState({
      playerOne: event.target.value
    })
    console.log('player one is ', this.state.playerOne)
  }

  handlePlayerOneSubmit() {
    event.preventDefault();
    axios.get('https://www.balldontlie.io/api/v1/players?search=' + this.state.playerOne)
    .then((results) => {
      //console.log('results.data.data is: ', results.data.data)
      results.data.data.map((player) => {
        var playersArray = [];
        var playersObj = {};
        playersObj[player.id] = player;
        playersArray.push(playersObj)
        this.setState({
          matchedPlayers: this.state.matchedPlayers.concat(player)
        })
      })
    })
  }

  handleClick(playerClicked) {
    console.log('this is playerOneClickedName: ', playerClicked)
    axios.get('https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=' + playerClicked.id)
    .then((results) => {
      console.log('this is single player stats: ', results.data.data[0])
      this.setState({
        playerOneStats: this.state.playerOneStats.concat(results.data.data[0]),
        playerOneClickedName: playerClicked
      })
    })
  }

  render() {
    return (
      <Outer>
        <Forms>
          <PlayerForms handleNameChange={this.handleNameChange.bind(this)} handlePlayerOneSubmit={this.handlePlayerOneSubmit.bind(this)} />
          <MatchedPlayersList matchedPlayers={this.state.matchedPlayers} handleClick={this.handleClick.bind(this)} />
          <PlayerStats playerOne={this.state.chosenPlayerOneId} playerOneStats={this.state.playerOneStats} playerOneClickedName={this.state.playerOneClickedName} />
        </Forms>

      </Outer>
    )
  }
}

export default App;