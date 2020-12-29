import React from 'react';
import ReactDOM from 'react-dom'

const axios = require('axios');

import TeamsTable from './teamsTable.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allTeams: [],
      selectedTeams: []
    }
  }

  componentDidMount() {
    axios.get('https://www.balldontlie.io/api/v1/teams')
    .then(results => {
      this.setState({
        allTeams: results.data.data
      })
    })
  }

  handleTeamClick(team) {
    event.preventDefault()
    this.setState({
      selectedTeams: this.state.selectedTeams.concat(team.abbreviation)
    }, () => {
      console.log('this team was clicked', this.state.selectedTeams)
    })
  }

  render() {
    return (
      <TeamsTable allTeams={this.state.allTeams} handleTeamClick={this.handleTeamClick.bind(this)}/>

    )
  }
}

export default App;