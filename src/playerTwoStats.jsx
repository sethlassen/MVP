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
  margin-top: 15px;
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

class PlayerTwoStats extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.playerTwoStats.length === 0) return null;
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

{/* <Table>
          <tbody>
            <StatsRow>
              <StatsData>{this.props.playerOneClickedName.height_feet}'{this.props.playerOneClickedName.height_inches}</StatsData>
              <StatsData>{this.props.playerOneClickedName.weight_pounds}</StatsData>
              <StatsData>{this.props.playerOneClickedName.team.abbreviation}</StatsData>
              <StatsData>{this.props.playerOneStats[0].games_played}</StatsData>
              <StatsData>{this.props.playerOneStats[0].min}</StatsData>
              <StatsData>{this.props.playerOneStats[0].pts}</StatsData>
              <StatsData>{this.props.playerOneStats[0].reb}</StatsData>
              <StatsData>{this.props.playerOneStats[0].ast}</StatsData>
              <StatsData>{this.props.playerOneStats[0].stl}</StatsData>
              <StatsData>{this.props.playerOneStats[0].blk}</StatsData>
              <StatsData>{this.props.playerOneStats[0].fg_pct}</StatsData>
              <StatsData>{this.props.playerOneStats[0].fg3_pct}</StatsData>
              <StatsData>{this.props.playerOneStats[0].ft_pct}</StatsData>
            </StatsRow>
          </tbody>
        </Table> */}

export default PlayerTwoStats;