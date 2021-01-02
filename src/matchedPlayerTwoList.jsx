import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const axios = require('axios');

const Names2 = styled.div`
  cursor: pointer;
  margin-top: 20px;
  text-align: left;
`;

class MatchedPlayerTwoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.matchedPlayerTwo.length === undefined) return null;
    return (
      <div>
        {console.log('this is matched player two list: ', this.props.matchedPlayerTwo)}
        {this.props.matchedPlayerTwo.map((player) => {
          return (
            <div>
              <Names2 onClick={() => this.props.handleClickTwo(player)}>
              &rarr;{player.first_name} {player.last_name}, {player.team.full_name}
              </Names2>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MatchedPlayerTwoList;