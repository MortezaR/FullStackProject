import React, { Component } from 'react'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            searchedUsers: []
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    handleSearchChange(e){
        this.setState({inputVal: e.target.value})
        this.props.searchUser({search:e.target.value})
        .then((users)=> this.setState({searchedUsers: users}))
    }
    render() {
        return (
            <div>
                <form className='navbar_form'>
                    <input className='navbar_search' type="text" 
                    onChange={this.handleSearchChange} placeholder="Search" />
                    <button className='navbar_search_button'>&#128269;</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;