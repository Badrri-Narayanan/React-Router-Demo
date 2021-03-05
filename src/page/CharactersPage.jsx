import React, { Component } from 'react'

export default class CharactersPage extends Component {
    render() {
        return (
            <div>
                <h1>Characters</h1>
                <button className="btn btn-primary" onClick={ () => this.props.history.push('/about') }>About</button>
                <button className="btn btn-primary" onClick={ () => this.props.history.push('/') }>Home</button>
                <br/>
                <button className="btn btn-primary" onClick={ () => this.props.history.push('/characters/greg_house') }>Gregory House</button>
                <button className="btn btn-primary" onClick={ () => this.props.history.push('/characters/eric_foreman') }>Eric Foreman</button>
                <button className="btn btn-primary" onClick={ () => this.props.history.push('/characters/robert_chase') }>Robert Chase</button>
                <button className="btn btn-primary" onClick={ () => this.props.history.push('/characters/allison_cameron') }>Allison Cameron</button>
                <button className="btn btn-primary" onClick={ () => this.props.history.push('/characters/lisa_cuddy') }>Lisa Cuddy</button>
                <button className="btn btn-primary" onClick={ () => this.props.history.push('/characters/james_wilson') }>James Wilson</button>
            </div>
        )
    }
}
