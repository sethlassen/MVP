import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const axios = require('axios');

class StatsColumn extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    console.log('playerOneClickedName is: ', this.props.playerOneClickedName)
    if (this.props.playerOneClickedName !== undefined) {
      return (
        <div>
          {console.log('in the IF playerOneClickedName is: ', this.props.playerOneClickedName)}
          NOT blank
        </div>
      )

    }
    else {
      return (
        <div>{console.log('in the ELSE playerOneClickedName is: ', this.props.playerOneClickedName)}BLANK</div>
      )
    }
  }
}

export default StatsColumn;