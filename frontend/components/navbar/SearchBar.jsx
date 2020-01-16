import React, { Component } from 'react'


class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form>
                    <input type="search" placeholder="Search" />
                </form>
            </div>
        )
    }
}

export default SearchBar;