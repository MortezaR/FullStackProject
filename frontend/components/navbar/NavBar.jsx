import React, { Component } from 'react'
import GreetingContainer from '../home/GreetingContainer'
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
                <GreetingContainer />
            </div>
        )
    }
}

export default NavBar;