import React, { Component } from 'react'
import NavbarContainer from '../navbar/NavbarContainer'
import PostIndexContainer from '../post/PostIndexContainer';


class HomeView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='home_view'>
                <NavbarContainer />
                <PostIndexContainer />
            </div>
        )
    }
}

export default HomeView;