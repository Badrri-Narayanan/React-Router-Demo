import React, { Component } from 'react'
import Chase from '../../Chase.jpg'

export default class RobertChase extends Component {
    render() {
        return (
            <div>
                <img className="profile-pic" src={Chase} alt="chase" />
                <h3>Dr. Robert Chase was the diagnostic team's surgeon and intensive care (intensivist) specialist during the first three seasons. He has been on the diagnostic team with House longer than either of other two members at the time. He returns in the fourth season as a member of Princeton-Plainsboro's surgical staff. In the sixth season, he returns to the diagnostic team, first working for Eric Foreman, then for House when House returns to head the team after his medical license is reinstated. Near the end of the eighth season, he temporarily resigns, but returns after House fakes his own death and becomes the Head of Diagnostics, replacing House. He is portrayed by Australian actor Jesse Spencer.</h3>
            </div>
        )
    }
}
