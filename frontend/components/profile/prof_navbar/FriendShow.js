import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class FriendShow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {friend} = this.props
        return (
            <div>
                <Link to={'/profile/' + friend.id}>
                    {friend.first_name + " " + friend.last_name}
                </Link>
            </div>
        )
    }
}

export default FriendShow;