import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const axios = require('axios');

const NameForm = styled.input`
  background-color: #282828;
  border: none;
  border-bottom: 1px solid white;
  padding-right: 10px;
  text-align: center;
  color: white;
  width: 150px;
  font-family: sans-serif;
  font-size: 20px;
  letter-spacing: 3px;
  margin-top: 20px;
`;

const YearSelector = styled.select`
  background-color: #282828;
  border: none;
  border-bottom: 1px solid white;
  margin-left: 15px;
  margin-right: 15px;
  color: white;
  font-weight: 100;
  font-family: sans-serif;
  font-size: 16px;
  letter-spacing: 3px;
  padding-bottom: 1px;
  text-align-last: center;
`;

const Button = styled.button`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid white;
  background-color: #282828;
  border-radius: 12px;
  border-color: white;
  color: white;
  font-weight: 100;
  cursor: pointer;
`;

class Form2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <form onSubmit={this.props.handlePlayerTwoSubmit}>
        <NameForm type="text" placeholder="Player 2" onChange={this.props.handleNameTwoChange} />
      <YearSelector onChange={this.props.yearChangeTwo}>
        <option>Choose A Year</option>
        <option>2018-2019</option>
        <option>2017-2018</option>
        <option>2016-2017</option>
        <option>2015-2016</option>
        <option>2014-2015</option>
        <option>2013-2014</option>
        <option>2012-2013</option>
        <option>2011-2012</option>
        <option>2010-2011</option>
        <option>2009-2010</option>
        <option>2008-2009</option>
        <option>2007-2008</option>
        <option>2006-2007</option>
        <option>2005-2006</option>
        <option>2004-2005</option>
        <option>2003-2004</option>
        <option>2002-2003</option>
        <option>2001-2002</option>
        <option>2000-2001</option>
        <option>1999-2000</option>
        <option>1998-1999</option>
        <option>1997-1998</option>
        <option>1996-1997</option>
        <option>1995-1996</option>
        <option>1994-1995</option>
        <option>1993-1994</option>
        <option>1992-1993</option>
        <option>1991-1992</option>
        <option>1990-1991</option>
        <option>1989-1990</option>
        <option>1988-1989</option>
        <option>1987-1988</option>
        <option>1986-1987</option>
        <option>1985-1986</option>
        <option>1984-1985</option>
    </YearSelector>
      <Button>Submit</Button>
    </form>
    )
  }
}

export default Form2;