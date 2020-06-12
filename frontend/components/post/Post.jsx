import React, { Component } from 'react'
import {formatDate} from '../../util/DateUtil'
import CommentContainer from './CommentContainer' 
import CommentFormContainer from './CommentFormContainer'
import {Link} from 'react-router-dom'


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
        const fetchComments = this.props.fetchComments(this.props.currentUser.id, this.props.post.id)
            // .then(comments => {this.setState({comments: comments.payload.comments})});
        Promise.all([fetchUser, fetchUser2, fetchComments])
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
                        <div className='post_footer'>
                        {
                            sender.id === this.props.currentUser.id ?
                                (<button className='delete_post_button' onClick={this.handleDelete}>
                                    Delete Post
                                </button>) : ""
                        }
                        </div>
                        <div className='post_names'>
                            <span className='post_profile_picture'></span>
                            <span className='post_sender'>
                                <Link to={'/profile/' + sender.id}>
                                {sender.first_name + " " + sender.last_name}
                                </Link>
                            </span>
                            <span className='post_arrow'> { sender.id !== receiver.id ? '>' : ''} </span>
                            <span className='post_receiver'>
                                <Link to={'/profile/' + receiver.id}>
                                { sender.id !== receiver.id ? receiver.first_name + " "
                                + receiver.last_name : ''}
                                </Link>
                            </span>
                        </div>
                    <div className='post_date'>
                        <span>{formatDate(this.state.post.created_at)}</span>
                    </div>
                    <div className='post_body'>
                        {this.props.post.body}
                    </div>
                    <div>
                        <div>
                            <CommentFormContainer post={this.state.post} />
                        </div>
                        <ul>
                            {
                                this.props.comments.map((post) => {
                                    if (post.reply_to_id === this.props.post.id) {
                                        return (<CommentContainer key={post.id} post={post}
                                            user={this.props.user} />)
                                    }
                                })
                            }
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Post;