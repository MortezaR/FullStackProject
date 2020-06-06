import React, { Component } from 'react'
import FriendShow from './FriendShow'
class ProfileFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }
    componentDidMount() {
        const fetchFriends = this.props.fetchFriends(this.props.user_id);
        Promise.all([fetchFriends]).then(() => { this.setState({ loaded: true }) })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user_id !== this.props.user_id) {
            this.props.fetchFriends(this.props.user_id)
                .then(() => { this.setState({ loaded: true }) })
        }
    }
    render() {
        if (!this.state.loaded) {
            return (<div></div>)
        }
        return (
            <div className="profile-page-container">
                <div className="profile-page-section-container">
                    <div className="profile-page-section-header">
                        <i className="fas fa-user-friends"></i>
                        <div className="profile_about_title">Friends</div>
                    </div>
                    <div className="profile-page-section-body">
                        <div className="friends">
                            <ul>
                                {
                                    this.props.friends.map((friend) => {
                                        return (<FriendShow friend={friend} />)
                                    }
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfileFriends;