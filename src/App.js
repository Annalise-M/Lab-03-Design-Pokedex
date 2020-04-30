import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
// import QuoteList from './QuoteList.js';

//need to input the actual pokemon data
const data = [
  {
    character: 'some character 1',
    quote: 'some quote 1',
    img: 'some img 1'
  },
  {
    character: 'some character 2',
    quote: 'some quote 2',
    img: 'some img 2'
  },
  {
    character: 'some character3',
    quote: 'some quote 3',
    img: 'some img 3'
  },
]

export default class App extends Component {
  state = {
    searchQuery: null,
    defenseQuery: null,
    data: data,
  }

  handleChange = (event) => {
    //get the value of the input;
    const value = event.target.value;
    this.setState({ searchQuery: value });
  }

  handleClick = async () => {
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);
    console.log(fetchedData.body.results);
    this.setState({ data: fetchedData })
  }

  //drop down handler
  // sortBy = (e) => {
  //   // const value = e.target.value;
  //   const fetchedData = type.searchQuery(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`)

  //   console.log(fetchedData.body.type);
  //   this.setState({ data: fetchedData })
  // }

  //type.searchQuery > work with this based off of type
  //dropdown into handleChange with added other urls


  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Search</button>
        {/* <QuoteList quotes={this.state.data} /> */}
      </div>
    )
  }
}
