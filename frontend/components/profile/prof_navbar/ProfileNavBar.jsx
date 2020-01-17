import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ProfileNavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='profile_navbar_button_container'>
                <div className='profile_navbar_section'>
                    <div className='profile_picture'>
                        <div className='profile_name'>
                            {this.props.currentUser.first_name + " " + this.props.currentUser.last_name}
                        </div>
                    </div>
                    

                </div>
                <div className='profile_navbar_section2'>
                    <div className='profile_navbar_div'>
                        <Link to='/profile' className='prof_navbar_button'>Timeline</Link>
                    </div>
                    <div className='profile_navbar_div'>
                        <Link to='/profile/about' className='prof_navbar_button'>About</Link>
                    </div>
                    <div className='profile_navbar_div last_div'>
                        <Link to='/profile/friends' className='prof_navbar_button'>Friends</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileNavBar;