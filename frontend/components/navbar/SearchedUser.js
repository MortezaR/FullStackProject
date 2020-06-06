import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchedUser extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { user } = this.props
        return (
            <div>
                <Link to={'/profile/' + user.id}>
                    {user.first_name + " " + user.last_name}
                </Link>
            </div>
        )
    }
}

export default SearchedUser;