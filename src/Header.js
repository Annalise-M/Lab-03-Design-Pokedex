import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                {this.props.greeting && <h1>{this.props.greeting}!</h1>}
            </div>
        )
    }
}