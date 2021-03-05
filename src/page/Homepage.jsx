import React, { Component } from 'react'
import HouseMDImg from '..//House-MD.png'

export default class Homepage extends Component {
    render(props) {
        return (
            <div>
                <button className="btn btn-primary" onClick={ () => this.props.history.push('/about') }>About</button>
                <button className="btn btn-primary" onClick={ () => this.props.history.push('/characters') }>Characters</button>
                <br/>
                <img src={HouseMDImg} alt="house_md" />
            </div>
        )
    }
}
