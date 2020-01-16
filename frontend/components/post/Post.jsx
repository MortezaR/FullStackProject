import React, { Component } from 'react'


class Post extends Component {
    constructor(props) {
        super(props);
        this.sender;
        this.receiver;
        this.componentWillReceiveProps;
        this.state = this.props.post;
    }
    componentDidMount(){
        console.log(this.props.post)
        const fetchUser = this.props.fetchUser(this.props.post.sender_id)
            .then(sender => {this.sender = sender.payload.user;});
        const fetchUser2 = this.props.fetchUser(this.props.post.receiver_id)
            .then(receiver => { this.receiver = receiver.payload.user;});
        Promise.all([fetchUser, fetchUser2])
            .then(() => this.setState({ loaded: true }))
        // this.receiver = this.props.fetchUser(this.props.post.receiver_id);
    }
    render() {
        console.log(this.sender);
        console.log(this.receiver);
        console.log(this.state.loaded);
        return (
            <div>
                <div className='postnames'>
                    <span className='post_sender'>
                    {this.state.loaded ? this.sender.first_name + " "
                    + this.sender.last_name : ''}
                    </span>
                    <span classname='post_arrow'> -> </span>
                    <span className='post_receiver'>
                    {this.state.loaded ? this.receiver.first_name + " "
                    + this.receiver.last_name : ''}
                    </span>
                </div>
                <div>
                    {this.props.post.body}
                </div>
            </div>
        )
    }
}

export default Post;