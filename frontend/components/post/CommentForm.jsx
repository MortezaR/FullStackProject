import React, { Component } from 'react'
import {formatDate} from '../../util/DateUtil'


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainPost:this.props.post,
            post:{ sender_id: this.props.currentUser.id,
            receiver_id: this.props.post.receiver_id,
            reply_to_id: this.props.post.id,
            body: ""
            }
        };
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        Promise.all([])
            .then(() => this.setState({ loaded: true }))
    }
    handleText(e) {
        let newPostState = Object.assign({}, this.state.post);
        newPostState.body = e.currentTarget.value;
        this.setState({ post: newPostState });
    }
    handleSubmit(e) {
        e.preventDefault();
        const post = Object.assign({}, this.state.post);
        this.props.createPost(this.props.currentUser.id, post);
        let newPostState = Object.assign({}, this.state.post);
        newPostState.body = '';
        this.setState({ post: newPostState });
        if (this.props.isFromComment){
            this.setState({loaded: false});
            this.props.handleSeeCommentForm();
            this.props.handleSeeComments();
        }
    }
    render() {
        if (!this.state.loaded) {
            return (<div></div>)
        }
        return (
            <div className='comment_form_wrapper'>
                <form className='comment_form' onSubmit={this.handleSubmit}>
                    <input type='text' wrap="hard" className='comment_form_textarea' placeholder='Add a comment'
                        value={this.state.post.body} onChange={this.handleText}></input>
                    <button className='hidden_submit_button'
                        disabled={this.state.post.body === ''}>Post Comment</button>
                </form>
            </div>
        )
    }
}

export default CommentForm