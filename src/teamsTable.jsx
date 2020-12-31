import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const axios = require('axios');

const Teams = styled.div`
  cursor: pointer;
  border: 1px solid black;
  width: 130px;
  text-align: center;
  display: inline-block;
`;

class TeamsTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.allTeams.length === undefined) return null;
    return (
      <div>
        Please Select Two Teams
        <h1>{this.props.allTeams.map((team) => {
          return (
            <Teams onClick={() => this.props.handleTeamClick(team)}>{team.abbreviation} </Teams>
          )
        })}</h1>
        <div>
        Team 1: {this.props.selectedTeams[0]}
        <div>
        Team 2: {this.props.selectedTeams[1]}
        </div>
      </div>
      </div>
    )
  }
}

export default TeamsTable;