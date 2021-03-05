import React, { Component } from 'react'
import Cameron from '../../Cameron.jpg'

export default class AllisonCameron extends Component {
    render() {
        return (
            <div>
                <img className="profile-pic" src={Cameron} alt="cameron" />
                <h3>Allison Cameron was a major character on House for the first six seasons. She was a member of Gregory House's diagnostic team during the first three seasons in the position of a fellow in Diagnostic Medicine. She was qualified as a specialist in immunology. She was the youngest member of House's original diagnostic team and the only female member. After Cameron left House's diagnostic team, she returned in the season four premiere as the senior emergency room attending physician at Princeton-Plainsboro Teaching Hospital. At the end of Season 5, she married Robert Chase.</h3>
            </div>
        )
    }
}
