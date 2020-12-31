import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const axios = require('axios');

const PlayerOneName = styled.div`
  background-color: red;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`

const CategoryRow = styled.tr`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const CategoryData = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StatsRow = styled.tr`
  text-align: center
`;

const StatsData = styled.td`
padding-top: 10px;
padding-bottom: 10px;
`;

class PlayerStats extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.playerOneStats.length === 0) return null;
    return (
      <div>
        <PlayerOneName>
          {this.props.playerOneClickedName.first_name} {this.props.playerOneClickedName.last_name}
        </PlayerOneName>
        <Table>
          <tbody>
            <CategoryRow>
              <CategoryData>Height</CategoryData>
              <CategoryData>Weight</CategoryData>
              <CategoryData>Team</CategoryData>
              <CategoryData>Games</CategoryData>
              <CategoryData>Minutes</CategoryData>
              <CategoryData>Points</CategoryData>
              <CategoryData>Rebounds</CategoryData>
              <CategoryData>Assists</CategoryData>
              <CategoryData>Steals</CategoryData>
              <CategoryData>Blocks</CategoryData>
              <CategoryData>FG%</CategoryData>
              <CategoryData>3FG%</CategoryData>
              <CategoryData>FT%</CategoryData>
            </CategoryRow>
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
        </Table>
      </div>
    )
  }
}

export default PlayerStats;