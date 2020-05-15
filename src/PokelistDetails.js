import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from './data.js';
import request from 'superagent';


export default class PokelistDetails extends Component {
    state = {
        searchQuery: '',
        data: data.results,
        selected: ''
    }

    async componentDidMount() {
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.pokemon}`)
        
        this.setState({ pokemon: fetchedData.body.result })
    }
    

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({searchQuery: value})
    }

    handleClick = async () => {
        const fetchedData = this.state.data;
        this.setState({ data: fetchedData })
    }


    render() {
        const pokemon = this.props.pokemon
        return (
            <div>
                <li className='box'>
                    <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon}/>
                    <Link to={`/pokemon/${pokemon.id}`}>
                        <h1>{pokemon.pokemon}</h1>
                    </Link>
                    <ul>
                        <li>Type: {this.props.pokemon.type_1} {this.props.pokemon.type_2}</li>
                        <li>Attack: {this.props.pokemon.attack}</li>
                        <li>Defense: {this.props.pokemon.defense}</li>
                        <li>Hp: {this.props.pokemon.hp}</li>
                    </ul>
                
                </li>

            </div>
        )
    }
}