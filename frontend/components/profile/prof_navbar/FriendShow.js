import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class FriendShow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { friend } = this.props
        return (
            <li>
                <div className="friends-border">
                    <div className="friends-image-name">
                        <Link to={'/profile/' + friend.id}>
                            <div className="friends-image" style={{ backgroundImage: `url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lifestyle-bestdogbreeds-1577128927.png?crop=1.00xw:1.00xh;0,0&resize=980:*")` }} />
                        </Link>
                        <Link to={'/profile/' + friend.id}>
                            <p className="friend-name-p">
                                {friend.first_name + " " + friend.last_name}
                            </p>
                        </Link>
                    </div>
                </div>
            </li>
        )
    }
}
export default FriendShow;