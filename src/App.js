import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
// import QuoteList from './QuoteList.js';

export default class App extends Component {
  state = {
    searchQuery: null,
    defenseQuery: null,
    data: [{}],
    selected: ''
  }

  handleChange = (event) => {
    //get the value of the input;
    const value = event.target.value;
    this.setState({ searchQuery: value });
  }

  handleClick = async () => {
    // const query = this.state.query;
    
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);
    console.log(fetchedData.body.results);
    this.setState({ data: fetchedData.body.results })
  }

  //type.searchQuery > work with this based off of type


  render() {

    return (
      <main>
      <div>
        <input onChange={this.handleChange} />

        <button onClick={this.handleClick}>Search</button>
        <select onChange={this.handleOptionChange}>
          <option value="" >All</option>
          <option value="normal" >Normal</option>
          <option value="fire" >Fire</option>
          <option value="water" >Water</option>
          <option value="grass" >Grass</option>
          <option value="flying" >Flying</option>
          <option value="bug" >Bug</option>
          <option value="poison" >Poison</option>
          <option value="dark" >Dark</option>
          <option value="electric" >Electric</option>
          <option value="fairy" >Fairy</option>
          <option value="fighting" >Fighting</option>
          <option value="ghost" >Ghost</option>
          <option value="ground" >Ground</option>
          <option value="ice" >Ice</option>
          <option value="psychic" >Psychic</option>
          <option value="rock" >Rock</option>
          <option value="steel" >Steel</option>\
        </select>
      </div>
      </main>
    )
  }
}
