import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../navbar/NavbarContainer'
import PostIndexContainer from '../post/PostIndexContainer';


class ProfileView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar />
                <h1>THIS IS THE PROFILE VIEW</h1>
                <PostIndexContainer />
            </div>
        )
    }
}

export default ProfileView;