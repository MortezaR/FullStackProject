import React, { Component } from 'react'


class ProfileView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {currentUser} = this.props
        console.log(currentUser.current_city);
        return (
            <div className='profile_intro_wrapper'>
                <div className='profile_intro_title'>Intro</div>
                <ul>
                    <li className='profile_into_list_item'>
                        {currentUser.current_city !== '' && currentUser.current_city !== null ? 
                        'Currently lives in' : 'Current City'} {currentUser.current_city}</li>
                    <li className='profile_into_list_item'>
                        {currentUser.work_place !== '' && currentUser.work_place !== null ?
                            'Currently works at' : 'Work Place'} {currentUser.work_place}</li>
                    <li className='profile_into_list_item'>
                        {currentUser.relationship_status !== '' && currentUser.relationship_status !== null ?
                        currentUser.first_name + ' is ' : 'Relationship Status'} {currentUser.relationship_status}</li>
                    {/* <li className='profile_into_list_item'> {currentUser.gender}</li> */}
                </ul>
            </div>
        )
    }
}

export default ProfileView;