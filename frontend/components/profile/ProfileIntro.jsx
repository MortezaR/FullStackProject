import React, { Component } from 'react'


class ProfileView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ul>
                    <label htmlFor='current_city'>Current City</label>
                    <label htmlFor='workplace'>Workplace</label>
                    <label htmlFor='relationship_status'>Relationship Status</label>
                    <li id='current_city'>{this.props.currentUser.current_city}</li>
                    <li id='workplace'>{this.props.currentUser.work_place}</li>
                    <li id='relationship_status'>{this.props.currentUser.relationship_status}</li>
                    <li>{this.props.currentUser.gender}</li>
                </ul>
            </div>
        )
    }
}

export default ProfileView;