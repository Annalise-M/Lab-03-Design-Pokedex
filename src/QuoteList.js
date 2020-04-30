import React, { Component } from 'react';

export default class QuoteList
extends Component {
    render() {
        return (
            <div>
                {
                    this.state.data.map (quote => {
                        return <h1>{quote.character} : {quote.quote}</h1>
                    })
                }
            </div>
        )
    }
}