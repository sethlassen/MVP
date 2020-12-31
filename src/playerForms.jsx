import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const axios = require('axios');

class PlayerForms extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <form onSubmit={this.props.handlePlayerOneSubmit}>
        Player 1 Name:
        <input type="text" onChange={this.props.handleNameChange} />
      <button>Search</button>
    </form>
    )
  }
}

export default PlayerForms;