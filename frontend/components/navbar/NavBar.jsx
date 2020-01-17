import React, { Component } from 'react'
import ButtonsContainer from './ButtonsContainer';
import SearchBar from './SearchBar';


class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='navbar'>
                <SearchBar />
                <ButtonsContainer />
            </div>
        )
    }
}

export default NavBar;