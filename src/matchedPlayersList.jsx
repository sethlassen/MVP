import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const axios = require('axios');

const Names = styled.div`
  cursor: pointer;
  margin-top: 20px;
  text-align: left;
  margin-left: 11%;
  padding-top: 5px;
`;

class MatchedPlayersList extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.matchedPlayers.length === undefined) return null;
    return (
      <div>
        {this.props.matchedPlayers.map((player) => {
          return (
            <div>
              <Names onClick={() => this.props.handleClick(player)}>
              &rarr;{player.first_name} {player.last_name}, {player.team.full_name}
              </Names>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MatchedPlayersList;