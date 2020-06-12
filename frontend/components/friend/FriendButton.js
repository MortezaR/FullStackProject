import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class FriendButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: "",
            friendRequest: "",
            loaded: false,
            buttonloaded: true
        }
        this.friendStatus = ""
        this.handleRequest = this.handleRequest.bind(this)
    }
    componentDidMount(){
        if (this.props.currentUser.id == this.props.user_id){
            this.state.friend = "self"
            this.setState({ loaded: true })
        }else{
            let {currentUser, user_id} = this.props
            const curUser = this.props.fetchFriend(currentUser.id, user_id)
                .then(payload => {if (payload.payload.friend) this.setState({ friend: true }) });
            const profileUser = this.props.fetchFriend(user_id, currentUser.id)
                .then(payload => { if (payload.payload.friend) this.setState({ friendRequest: true }) });
            Promise.all([curUser, profileUser])
                .then(() => this.setState({ loaded: true }))
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user_id !== this.props.user_id) {
            let { currentUser, user_id } = this.props
            const curUser = this.props.fetchFriend(currentUser.id, user_id)
                .then(payload => { if (payload.payload.friend) this.setState({ friend: true }) });
            const profileUser = this.props.fetchFriend(user_id, currentUser.id)
                .then(payload => { if (payload.payload.friend) this.setState({ friendRequest: true }) });
            Promise.all([curUser, profileUser])
                .then(() => this.setState({ loaded: true }))
        }
    }
    handleRequest(){
        this.setState({buttonloaded:false});
        let { currentUser, user_id } = this.props;
        if (this.friendStatus === "unfriend" || this.friendStatus === "request sent"){
            this.props.deleteFriend(currentUser.id, user_id)
                .then(() => {
                    this.setState({
                        friendRequest: false,
                        buttonloaded: true
                    })
                });
        }else{
            this.props.createFriend(currentUser.id,
                {user_id: currentUser.id, friend_id: user_id})
                .then(() => {
                    this.setState({
                        friendRequest: true,
                        buttonloaded: true
                    })
                });
        }
    }
    render() {
        if (!this.state.loaded || this.state.friend === "self") {
            return (<div></div>)
        }
        let {friend, friendRequest} = this.state
        if(friend && friendRequest){
            this.friendStatus = "unfriend"
        }else if(!friend && friendRequest){
            this.friendStatus = "request sent"
        }else if (friend && !friendRequest){
            this.friendStatus = "accept friend request"
        }else{
            this.friendStatus = "＋ add friend"
        }
        return (
            // <div className='navbar_button_div'>
                <button className='friend-button' onClick={this.handleRequest}>{this.friendStatus}</button>
            // </div>  
        )
    }
}

export default FriendButton;