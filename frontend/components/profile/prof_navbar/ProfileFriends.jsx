import React, { Component } from 'react'
import FriendShow from './FriendShow'


class ProfileFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }
    componentDidMount(){
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
        if (!this.state.loaded || !user) {
            return (<div></div>)
        }
        return (
            <div>
                THIS IS THE FRIENDS TAB
                <div id='friends-header'>Friends</div>
                <ul>
                    {

                        this.props.friends.map((friend) => {
                            return (<FriendShow friend={friend} />)
                        }
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default ProfileFriends;