import React, { Component } from 'react'
// import data from './data.js';
import PokelistDetails from './PokelistDetails.js';
import request from 'superagent';

export default class ListPage extends Component {
    state = {
        pokemon: [],
        searchQuery: '',
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState({searchQuery: value})
    }

    handleClick = async () => {
        const {
            body: {
                results
            }
        } = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`)

        console.log(results);
        this.setState({ pokemon: results })
    }


    render() {
        console.log(this.state.pokemon);
        return (
            <div>
                <input className='listPageInput' onChange={this.handleChange}/>
                <ul>
                {
                    this.stat.data.map((pokemon) => {
                        return <PokelistDetails key={pokemon}/>
                    })
                }
                </ul>
            </div>
        )
    }
}
