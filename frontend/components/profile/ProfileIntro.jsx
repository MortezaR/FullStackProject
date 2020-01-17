import React, { Component } from 'react'


class ProfileView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {currentUser} = this.props
        return (
            <div className='profile_intro_wrapper'>
                <div className='profile_intro_title'>Intro</div>
                <ul>
                    <li className='profile_into_list_item'>
                        {currentUser.current_city !== '' ? 
                        'Currently lives in' : ''} {currentUser.current_city}</li>
                    <li className='profile_into_list_item'>
                        {currentUser.work_place !== '' ?
                            'Currently works at' : ''} {currentUser.work_place}</li>
                    <li className='profile_into_list_item'>
                        {currentUser.relationship_status !== '' ?
                        currentUser.first_name + ' is ' : ''} {currentUser.relationship_status}</li>
                    <li className='profile_into_list_item'> {currentUser.gender}</li>
                </ul>
            </div>
        )
    }
}

export default ProfileView;