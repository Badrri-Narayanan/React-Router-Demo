import React, { Component } from 'react'
import Eric from '../../Eric.jpg'

export default class EricForeman extends Component {
    render() {
        return (
            <div>
                <img className="profile-pic" src={Eric} alt="Eric" />
                <h3>Dr. Eric Foreman was a major character on House ever since the first season. He is the current Dean of Medicine at Princeton Plainsboro Teaching Hospital and a former member of Dr. House's diagnostic team. Overall, Foreman's personality is the closest to House's, although he is often loathed to admit the fact. Though Foreman is far more outgoing than House, he shares House's introverted nature and is the least concerned about how others perceive him. His original role was to serve as the team's "break-in" man for environmental scans, but he soon developed into the only member of the team who was willing to stand up to House.</h3>
            </div>
        )
    }
}
