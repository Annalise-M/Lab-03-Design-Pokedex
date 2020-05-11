import React, { Component } from 'react'

export default class SearchSection extends Component {
    render () {
        return (
            <section className="options-section">
                <p></p>
                <input onChange={this.props.mycallbackhandleChange} name="search" />
                {/* work on the other input search here */}
                {/* <input onChange={this.props.mycallbackhandleChange} name="search" /> */}
                <button onClick={this.props.mycallbackhandleClick}></button>
            </section>
        )
    }
}