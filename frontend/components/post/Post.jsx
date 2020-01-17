import React, { Component } from 'react'
import {formatDate} from '../../util/DateUtil'


class Post extends Component {
    constructor(props) {
        super(props);
        this.sender;
        this.receiver;
        this.componentWillReceiveProps;
        this.state = {post:this.props.post};
        this.props = props;
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount(){
        const fetchUser = this.props.fetchUser(this.props.post.sender_id)
            .then(sender => {this.sender = sender.payload.user;});
        const fetchUser2 = this.props.fetchUser(this.props.post.receiver_id)
            .then(receiver => { this.receiver = receiver.payload.user;});
        Promise.all([fetchUser, fetchUser2])
            .then(() => this.setState({ loaded: true }))
    }
    handleDelete(){
        this.props.deletePost(this.props.currentUser.id, this.props.post.id);
    }
    render() {
        return (
            <div>
                <div className='post_wrapper'>
                    <div className='post_names'>
                        <span className='post_sender'>
                        {this.state.loaded ? this.sender.first_name + " "
                        + this.sender.last_name : ''}
                        </span>
                        <span className='post_arrow'> -> </span>
                        <span className='post_receiver'>
                        {this.state.loaded ? this.receiver.first_name + " "
                        + this.receiver.last_name : ''}
                        </span>
                    </div>
                    <div className='post_date'>
                        <span>{this.state.loaded ? 
                        formatDate(this.state.post.created_at): ''}</span>
                    </div>
                    <div>
                        {this.props.post.body}
                    </div>
                    <div>
                        <button onClick={this.handleDelete}>
                            Delete me Fam
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;