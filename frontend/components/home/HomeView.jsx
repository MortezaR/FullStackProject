import React, { Component } from 'react'
import NavbarContainer from '../navbar/NavbarContainer'
import PostIndexContainer from '../post/PostIndexContainer';


class HomeView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavbarContainer />
                <h1>THIS IS THE HOME VIEW</h1>
                <PostIndexContainer />
            </div>
        )
    }
}

export default HomeView;