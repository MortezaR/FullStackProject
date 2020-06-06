import React, { Component } from 'react'
import ButtonsContainer from './ButtonsContainer';
import SearchBarContainer from './SearchBarContainer';


class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='navbar'>
                <SearchBarContainer />
                <ButtonsContainer />
            </div>
        )
    }
}

export default NavBar;