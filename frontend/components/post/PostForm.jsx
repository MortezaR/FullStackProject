import React, { Component } from 'react'


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {post:{
            sender_id: this.props.currentUser.id,
            receiver_id: this.props.currentUser.id,
            body: ""
        }};
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.props = props;
    }
    handleText(e){
        let newPostState = Object.assign({}, this.state.post);
        newPostState.body = e.currentTarget.value;
        this.setState({post: newPostState});
    }
    handleSubmit(e) {
        e.preventDefault();
        const post = Object.assign({}, this.state.post);
        this.props.createPost(this.props.currentUser.id, post);
        let newPostState = Object.assign({}, this.state.post);
        newPostState.body = '';
        this.setState({ post: newPostState });
    }
    render() {
        return (
            <div className='post_form_wrapper'>
                <div className='post_form_title'>
                    Create Post
                </div>
                <form className='post_form' onSubmit ={this.handleSubmit}>
                    <input type='text' wrap="hard" className='post_form_textarea' placeholder='What is on your mind?'
                    value={this.state.post.body} onChange={this.handleText}></input>
                    <button className='submit_form_button'
                     disabled={this.state.post.body === ''}>Post</button>
                </form>
            </div>
        )
    }
}

export default PostForm;