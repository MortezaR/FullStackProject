import React, { Component } from 'react'
import {formatDate} from '../../util/DateUtil'


class Post extends Component {
    constructor(props) {
        super(props);
        this.componentWillReceiveProps;
        this.state = {post:this.props.post};
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount(){
        const fetchUser = this.props.fetchUser(this.props.post.sender_id)
            .then(sender => {this.setState({sender: sender.payload.user})});
        const fetchUser2 = this.props.fetchUser(this.props.post.receiver_id)
            .then(receiver => { this.setState({ receiver: receiver.payload.user })});
        Promise.all([fetchUser, fetchUser2])
            .then(() => this.setState({ loaded: true }))
    }
    handleDelete(){
        this.props.deletePost(this.props.currentUser.id, this.props.post.id);
    }
    render() {
        if (!this.state.loaded) {
            return (<div></div>)
        }
        let {sender, receiver} = this.state
        return (
            <div>
                <div className='post_wrapper'>
                    <div className='post_names'>
                        <span className='post_profile_picture'></span>
                        <span className='post_sender'>
                        {sender.first_name + " "
                        + sender.last_name}
                        </span>
                        <span className='post_arrow'> {this.state.loaded && sender.id !== receiver.id ? '>' : ''} </span>
                        <span className='post_receiver'>
                        {this.state.loaded && sender.id !== receiver.id ? receiver.first_name + " "
                        + receiver.last_name : ''}
                        </span>
                    </div>
                    <div className='post_date'>
                        <span>{formatDate(this.state.post.created_at)}</span>
                    </div>
                    <div className='post_body'>
                        {this.props.post.body}
                    </div>
                    <div className='post_footer'>
                        <button className='delete_post_button' onClick={this.handleDelete}>
                            Delete Post
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;