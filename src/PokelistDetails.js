import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PokelistDetails extends Component {
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
                    </ul>
                {/* <h2>{this.props.pokemon.type_1} {this.props.pokemon.type_2}</h2>
                <h2>{this.props.pokemon.ability_hidden}</h2>
                </li> */}
                </li>

            </div>
        )
    }
}