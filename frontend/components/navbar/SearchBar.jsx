import React, { Component } from 'react'
import SearchedUser from './SearchedUser'

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
        // debugger
        this.setState({inputVal: e.target.value})
        this.props.searchUser(e.target.value)
        .then((users)=> this.setState({searchedUsers: Object.values(users.payload)}))
        let sBar = document.getElementById('navbar_search');
        const selectChangeListener = () => {
            if (document.getSelection().anchorNode.id !== 'navbar_form') {
                document.removeEventListener("selectionchange", selectChangeListener);
                this.setState({searchedUsers: []})
            }
        }
        document.addEventListener("selectionchange", selectChangeListener)
        // if(sBar.selected === false){
        //     let sBarDropDown = ;
        //     sBarDropDown.innerHTML = "";
        // }
    }
    render() {
        return (
            <div>
                <form id="navbar_form" className='navbar_form'>
                    <input className='navbar_search' type="text" 
                    onChange={this.handleSearchChange} placeholder="Search" />
                    <button className='navbar_search_button'>&#128269;</button>
                    <ul className='search_dropdown'>
                        {

                            this.state.searchedUsers.map((user) => {
                                return (<SearchedUser key={user.id} user={user} />)
                            })
                        }
                    </ul>
                </form>
            </div>
        )
    }
}

export default SearchBar;