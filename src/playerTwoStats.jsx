import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const axios = require('axios');

const PlayerTwoName = styled.div`
  font-family: sans-serif;
  letter-spacing: 5px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 56px;
`;

const PlayerHeaders = styled.th`
  border-bottom: 1px solid #585858;
  padding-bottom: 13px;
  padding-top 14px;
  font-size: 20px;
  font-weight: 100;
`;

const NameHeader = styled.th`
  border-bottom: 1px solid #585858;
  padding-bottom: 20px;
  padding-top 10px;
  font-size: 30px;
`;

const Table2 = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const NewSearchForm = styled.form`
  margin-top: 15px;
`;

const NewSearchButton = styled.button`
  letter-spacing: 3px;
  justify-content: center;
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

class PlayerTwoStats extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.playerTwoStats.length === 0) return null;
    if (this.props.playerTwoStats[0] === undefined) {
      alert('This player did not play in that season. Please click New Search.');
      return (
        <div>

        </div>
      )
    }
    return (

        <PlayerTwoName>
          <Table2>
          <tbody>
            <tr><NameHeader>{this.props.playerTwoClickedName.first_name} {this.props.playerTwoClickedName.last_name}</NameHeader></tr>
            <tr><PlayerHeaders>{this.props.playerTwoClickedName.team.abbreviation}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.checkHeight()}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.checkWeight()}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerTwoStats[0].games_played}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerTwoStats[0].min}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerTwoStats[0].pts}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerTwoStats[0].reb}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerTwoStats[0].ast}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerTwoStats[0].stl}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerTwoStats[0].blk}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerTwoStats[0].fg_pct}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerTwoStats[0].fg3_pct}</PlayerHeaders></tr>
            <tr><PlayerHeaders>{this.props.playerTwoStats[0].ft_pct}</PlayerHeaders></tr>
          </tbody>
        </Table2>
        </PlayerTwoName>

    )
  }
}

export default PlayerTwoStats;