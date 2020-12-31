import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const axios = require('axios');

const Names = styled.div`
  cursor: pointer;
`;

class MatchedPlayersList extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.matchedPlayers.length === 0) return null;
    return (
      <div>
        {this.props.matchedPlayers.map((player) => {
          return (
            <div>
              <Names onClick={() => this.props.handleClick(player)}>
                {player.first_name} {player.last_name}, {player.team.full_name}
              </Names>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MatchedPlayersList;