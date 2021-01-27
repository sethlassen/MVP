import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const axios = require('axios');

const PlayerOneName = styled.div`
  font-family: sans-serif;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  letter-spacing: 5px;
  margin-top: 15px;
`;

const Outer = styled.div`
  display: flex;
`;

const PlayerTable = styled.table`
  width: 81%;
  border-collapse: collapse;
`;

const NameHeader = styled.th`
  border-bottom: 1px solid #585858;
  padding-bottom: 20px;
  padding-top 10px;
  font-size: 30px;
`;

const NameMiddle = styled.th`
  padding-bottom: 20px;
  padding-top 10px;
  font-size: 30px;
  border-bottom: 1px solid #585858;
`;

const PlayerHeaders = styled.th`
  border-bottom: 1px solid #585858;
  padding-bottom: 13px;
  padding-top 14px;
  font-size: 20px;
  font-weight: 100;
`;

const MiddleTable = styled.table`
  border-collapse: collapse;
  width: 20%;
  justify-content: center;
`;

const MiddleHeaders = styled.th`
  border-bottom: 1px solid #585858;
  padding-bottom: 10px;
  padding-top 10px;
  font-size: 26px;
  width: 100%;
`;

const NewSearchForm = styled.form`
  margin-top: 15px;
`;

const NewSearchButton = styled.button`
  letter-spacing: 3px;
  margin-left: 80%;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid white;
  background-color: #282828;
  border-radius: 12px;
  border-color: white;
  color: white;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 100;
  font-size: 12px;
  cursor: pointer;
`;

class PlayerStats extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.playerOneStats.length === 0) return null;
    if (this.props.playerOneStats[0] === undefined) {
      alert('This player did not play in that season. Please click New Search.');
      return (
        <div>
          <NewSearchForm onSubmit={this.props.handleNewSearch}>
            <NewSearchButton>
             New Search
            </NewSearchButton>
          </NewSearchForm>
        </div>
      )
    } else {

    return (
      <div>
        <NewSearchForm onSubmit={this.props.handleNewSearch}>
          <NewSearchButton>
            New Search
          </NewSearchButton>
        </NewSearchForm>

        <PlayerOneName>



      <Outer>
        <PlayerTable>
          <tbody>
            <tr><NameHeader>{this.props.playerOneClickedName.first_name} {this.props.playerOneClickedName.last_name}</NameHeader></tr>
            <tr><PlayerHeaders>{this.props.playerOneClickedName.team.abbreviation}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.checkHeight()}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.checkWeight()}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerOneStats[0].games_played}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerOneStats[0].min}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerOneStats[0].pts}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerOneStats[0].reb}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerOneStats[0].ast}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerOneStats[0].stl}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerOneStats[0].blk}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerOneStats[0].fg_pct}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerOneStats[0].fg3_pct}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerOneStats[0].ft_pct}</PlayerHeaders></tr>
          </tbody>
        </PlayerTable>

          <MiddleTable>
            <tbody>
              <tr><NameMiddle>&nbsp;</NameMiddle></tr>
              <tr><MiddleHeaders>Team</MiddleHeaders></tr>
              <tr><MiddleHeaders>Height</MiddleHeaders></tr>
              <tr><MiddleHeaders>Weight</MiddleHeaders></tr>
              <tr><MiddleHeaders>Games</MiddleHeaders></tr>
              <tr><MiddleHeaders>Minutes</MiddleHeaders></tr>
              <tr><MiddleHeaders>Points</MiddleHeaders></tr>
              <tr><MiddleHeaders>Rebounds</MiddleHeaders></tr>
              <tr><MiddleHeaders>Assists</MiddleHeaders></tr>
              <tr><MiddleHeaders>Steals</MiddleHeaders></tr>
              <tr><MiddleHeaders>Blocks</MiddleHeaders></tr>
              <tr><MiddleHeaders>FG%</MiddleHeaders></tr>
              <tr><MiddleHeaders>3FG%</MiddleHeaders></tr>
              <tr><MiddleHeaders>FT%</MiddleHeaders></tr>
            </tbody>
          </MiddleTable>

      </Outer>
    </PlayerOneName>
    </div>
    )
    }
  }
}

export default PlayerStats;