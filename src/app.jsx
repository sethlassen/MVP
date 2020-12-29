import React from 'react';
import ReactDOM from 'react-dom'

const axios = require('axios');

import TeamsTable from './teamsTable.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allTeams: []
    }
  }

  componentDidMount() {
    axios.get('https://www.balldontlie.io/api/v1/teams')
    .then(results => {
      //console.log('here are results', results.data.data)
      this.setState({
        allTeams: results.data.data
      })
      //console.log(this.state.allTeams)
    })
  }

  render() {
    return (
      <TeamsTable allTeams={this.state.allTeams} />

    )
  }
}

export default App;