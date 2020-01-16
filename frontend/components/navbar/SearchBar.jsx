import React, { Component } from 'react'


class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form className='navbar_form'>
                    <input className='navbar_search' type="text" placeholder="Search" />
                    <button className='navbar_search_button'>&#128269;</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;