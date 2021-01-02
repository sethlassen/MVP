import React from 'react';
import ReactDOM from 'react-dom'

const axios = require('axios');

import TeamsTable from './teamsTable.jsx'
import PlayerForms from './playerForms.jsx'
import MatchedPlayersList from './matchedPlayersList.jsx'
import PlayerStats from './playerStats.jsx'
import StatsColumn from './statsColumn.jsx'
import Form2 from './form2.jsx'
import MatchedPlayerTwoList from './matchedPlayerTwoList.jsx'
import PlayerTwoStats from './playerTwoStats.jsx'

import styled from 'styled-components'

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  color: white;
  font-family: sans-serif;
  letter-spacing: 5px;
`;

const Outer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  font-size: 16px;
`;

const LeftSide = styled.div`
  color: white;
  width: 55%;

`;

const Form1 = styled.div`

`;

const FormTwo = styled.div`
  text-align: right;
  margin-right: 100px;
`;

const RightSide = styled.div`
  color: white;
  width: 45%;

`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerOne: '',
      playerTwo: '',
      playerOneMatchesByID: [],
      matchedPlayers: [],
      matchedPlayerTwo: [],
      chosenPlayerOneId: '',
      playerOneStats: [],
      playerTwoStats: [],
      playerOneClickedName: '',
      playerTwoClickedName: '',
      yearChosenOne: '',
      yearChosenTwo: ''
    }
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#282828'
}

  handleNameChange(event) {
    //event.preventDefault();
    this.setState({
      playerOne: event.target.value
    })
    console.log('player one is ', this.state.playerOne)
  }

  yearChangeOne(event) {
    console.log('here is the year chosen: ', event.target.value.slice(0, 4))
    this.setState({
      yearChosenOne: event.target.value.slice(0, 4)
    })
  }

  yearChangeTwo(event) {
    console.log('here is the year chosen for player 2: ', event.target.value.slice(0, 4))
    this.setState({
      yearChosenTwo: event.target.value.slice(0, 4)
    })
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

  handleNameTwoChange(event) {
    //event.preventDefault();
    this.setState({
      playerTwo: event.target.value
    })
    console.log('player two is ', this.state.playerTwo)
  }

  handlePlayerTwoSubmit() {
    console.log('player 2 button clicked!')
    event.preventDefault();
    axios.get('https://www.balldontlie.io/api/v1/players?search=' + this.state.playerTwo)
    .then((results) => {
      console.log('from player two submit results.data.data is: ', results.data.data)
      results.data.data.map((player) => {
        var playersArray = [];
        var playersObj = {};
        playersObj[player.id] = player;
        playersArray.push(playersObj)
        this.setState({
          matchedPlayerTwo: this.state.matchedPlayerTwo.concat(player)
        })
      })
    })
  }

  handleClick(playerClicked) {
    console.log('this is playerOneClickedName: ', playerClicked)
    axios.get('https://www.balldontlie.io/api/v1/season_averages?season=' + this.state.yearChosenOne + '&player_ids[]=' + playerClicked.id)
    .then((results) => {
      console.log('this is single player stats: ', results.data.data[0])
      this.setState({
        playerOneStats: this.state.playerOneStats.concat(results.data.data[0]),
        playerOneClickedName: playerClicked,
        matchedPlayers: []
      })
    })
  }

  handleClickTwo(playerClicked) {
    console.log('IN SECOND CLICK HANDLER')
    console.log('this is playerTwoClickedName: ', playerClicked)
    axios.get('https://www.balldontlie.io/api/v1/season_averages?season=' + this.state.yearChosenTwo + '&player_ids[]=' + playerClicked.id)
    .then((results) => {
      console.log('this is single player 2 stats: ', results.data.data[0])
      this.setState({
        playerTwoStats: this.state.playerTwoStats.concat(results.data.data[0]),
        playerTwoClickedName: playerClicked,
        matchedPlayerTwo: []
      })
    })
  }

  checkHeightPlayerOne() {
    var height = "";
    console.log('in check height:', this.state.playerOneClickedName.height_feet)
    if (this.state.playerOneClickedName.height_feet === null) {
      console.log('hit IF block')
      height = "N/A"
    } else {
      console.log('hit ELSE block')
      height = this.state.playerOneClickedName.height_feet + "'" + this.state.playerOneClickedName.height_inches;
    }
    return height;
  }

  checkHeightPlayerTwo() {
    var height = "";
    console.log('in check height:', this.state.playerTwoClickedName.height_feet)
    if (this.state.playerTwoClickedName.height_feet === null) {
      console.log('hit IF block')
      height = "N/A"
    } else {
      console.log('hit ELSE block')
      height = this.state.playerTwoClickedName.height_feet + "'" + this.state.playerTwoClickedName.height_inches;
    }
    return height;
  }

  checkWeightPlayerOne() {
    var weight = "";
    console.log('in check weight:', this.state.playerOneClickedName.weight_pounds)
    if (this.state.playerOneClickedName.weight_pounds === null) {
      console.log('hit IF block')
      weight = "N/A"
    } else {
      console.log('hit ELSE block')
      weight = this.state.playerOneClickedName.weight_pounds;
    }
    return weight;
  }

  checkWeightPlayerTwo() {
    var weight = "";
    console.log('in check weight:', this.state.playerTwoClickedName.weight_pounds)
    if (this.state.playerTwoClickedName.weight_pounds === null) {
      console.log('hit IF block')
      weight = "N/A"
    } else {
      console.log('hit ELSE block')
      weight = this.state.playerTwoClickedName.weight_pounds;
    }
    return weight;
  }

  render() {
    return (
      <Title>
       NBA Player Stats Comparison

      <Outer>
        <LeftSide>
          <Form1>
          <PlayerForms handleNameChange={this.handleNameChange.bind(this)} handlePlayerOneSubmit={this.handlePlayerOneSubmit.bind(this)} yearChangeOne={this.yearChangeOne.bind(this)} />
          </Form1>
          <MatchedPlayersList matchedPlayers={this.state.matchedPlayers} handleClick={this.handleClick.bind(this)} />
          <PlayerStats playerOne={this.state.chosenPlayerOneId} playerOneStats={this.state.playerOneStats} playerOneClickedName={this.state.playerOneClickedName} checkHeight={this.checkHeightPlayerOne.bind(this)} checkWeight={this.checkWeightPlayerOne.bind(this)} />
        </LeftSide>
        <RightSide>
          <FormTwo>
            <Form2 handleNameTwoChange={this.handleNameTwoChange.bind(this)} handlePlayerTwoSubmit={this.handlePlayerTwoSubmit.bind(this)} yearChangeTwo={this.yearChangeTwo.bind(this)} />
          </FormTwo>
          <MatchedPlayerTwoList matchedPlayerTwo={this.state.matchedPlayerTwo} handleClickTwo={this.handleClickTwo.bind(this)}/>
          <PlayerTwoStats playerTwo={this.state.chosenPlayerOneId} playerTwoStats={this.state.playerTwoStats} playerTwoClickedName={this.state.playerTwoClickedName} checkHeight={this.checkHeightPlayerTwo.bind(this)} checkWeight={this.checkWeightPlayerTwo.bind(this)}/>
        </RightSide>



      </Outer>
      </Title>
    )
  }
}

export default App;