import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ProfileNavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='navbar_button_container'>
                <div >
                    <Link to='/profile' className='prof_navbar_button'>Timeline</Link>
                </div>
                <div >
                    <Link to='/profile/about' className='prof_navbar_button'>About</Link>
                </div>
                <div >
                    <Link to='/profile/friends' className='prof_navbar_button'>Friends</Link>
                </div>
            </div>
        )
    }
}

export default ProfileNavBar;