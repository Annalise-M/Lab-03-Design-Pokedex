import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import PokelistDetails from './PokelistDetails.js';
import Header from './Header.js';


export default class SearchPage extends Component {
  state = {
    searchQuery: '',
    data: [{}],
    selected: ''
  }

  //need to put the async function below
  // async componentDidMount() {
  //   const searchQuery = this.state.searchQuery;
  //   const fetchedData = await request.get(``)
    // console.log(data.body);

    // this.setState({ data.body })
  // }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ searchQuery: value });
  }

  handleOptionChange = async (event) => {
    const fetchedData =await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${event.target.value}`);
    this.setState({ data: fetchedData.body.results });
  }

  handleClick = async () => {
    if (this.state.selected === '') {
      const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);
      this.setState({ data: fetchedData.body.results });
    } else {
      const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${this.state.selected}`);
      this.setState({ data: fetchedData.body.results });
    }
  }

  render() {

    return (
      <div>
        <section>
          <Header greeting='Welcome!!' />
        </section>
      
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
          <option value="steel" >Steel</option>
        </select>
            <ul className="PokemonList">
              {
                this.state.data.map(item => {
                  return <PokelistDetails pokemon={item}/>
                })
              }
            </ul>
          </div>
      </main>
      </div>
    )
  }
}
