import React, { Component } from 'react'
import Wilson from '../../Wilson.jpg'

export default class JamesWilson extends Component {
    render() {
        return (
            <div>
                <img className="profile-pic" src={Wilson} alt="wilson" /> 
                <h3>James Evan Wilson was a major character on House from the first season until the end of the series. He was the Head of Oncology at Princeton-Plainsboro Teaching Hospital and also Dr. Gregory House's sole good friend up until his resignation from the hospital and (probable, due to his refusal to continue treatment) eventual death from Thymoma, which he was officially diagnosed with in the Season 8 episode, Body and Soul. Wilson acts as House’s conscience, sounding board, and the enabler of his abusive personality.</h3>
            </div>
        )
    }
}
