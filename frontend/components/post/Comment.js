import React, { Component } from 'react'
import { formatDate } from '../../util/DateUtil'
import CommentContainer from './CommentContainer'
import CommentFormContainer from './CommentFormContainer'
import { Link } from 'react-router-dom'


class Comment extends Component {
    constructor(props) {
        super(props);
        this.componentWillReceiveProps;
        this.state = { 
            post: this.props.post,
            seeComments: false,
            seeCommentForm: false
         };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSeeComments = this.handleSeeComments.bind(this);
        this.handleSeeCommentForm = this.handleSeeCommentForm.bind(this);
    }
    componentDidMount() {
        const fetchUser = this.props.fetchUser(this.props.post.sender_id)
            .then(sender => { this.setState({ sender: sender.payload.user }) });
        const fetchUser2 = this.props.fetchUser(this.props.post.receiver_id)
            .then(receiver => { this.setState({ receiver: receiver.payload.user }) });
        const fetchComments = this.props.fetchComments(this.props.currentUser.id, this.props.post.id)
        // .then(comments => {this.setState({comments: comments.payload.comments})});
        Promise.all([fetchUser, fetchUser2, fetchComments])
            .then(() => this.setState({ loaded: true }))
    }
    handleDelete() {
        this.props.deletePost(this.props.currentUser.id, this.props.post.id);
    }
    handleSeeComments(){
        this.setState({seeComments: !this.state.seeComments});
    }
    handleSeeCommentForm(){
        this.setState({ seeCommentForm: !this.state.seeCommentForm });
        // this.setState({ seeComments: !this.state.seeComments });

    }
    render() {
        if (!this.state.loaded) {
            return (<div></div>)
        }
        let { sender, receiver } = this.state
        let hasComments = 0;
        const replyText = this.state.seeComments ? "hide replies " : "replies "
        return (
            <div>
                <div className='comment_wrapper'>
                    {/* <div className='comment_footer'>
                        
                    </div> */}
                    <div className='comment_body_full'>
                        <span className='post_profile_picture'></span>
                        <span className='post_sender comment_names'>
                            <Link to={'/profile/' + sender.id}>
                                {sender.first_name + " " + sender.last_name}
                            </Link>
                        </span>
                        <span className='comment_body'>
                            {this.props.post.body}
                        </span>
                    </div>
                    {/* <span className='comment_body'>
                        {this.props.post.body}
                    </span> */}
                    
                </div>
                <div className='comments_comments'>
                    <ul>
                        {
                            this.props.comments.map((post) => {
                                if (post.reply_to_id === this.props.post.id) {
                                    hasComments += 1;
                                    if(this.state.seeComments){
                                        return (<CommentContainer key={post.id} post={post}
                                            user={this.props.user} />)
                                    }
                                }
                            })
                        }
                    </ul>
                    {this.state.seeCommentForm ? <div className='comment_button'>
                        <CommentFormContainer post={this.state.post} isFromComment={true}
                        handleSeeCommentForm={this.handleSeeCommentForm} 
                        handleSeeComments={this.handleSeeComments} 
                        />
                    </div> : ""}
                <div className='comment_buttons'>
                    <div>
                            <div className='comment_button' onClick={this.handleSeeCommentForm}>{this.state.seeCommentForm ? "" : "reply "}</div>
                    </div>
                        {
                            sender.id === this.props.currentUser.id ?
                                (<div className='comment_button' onClick={this.handleDelete}>
                                    Delete Comment
                                </div>) : ""
                        }
                    </div>
                    {/* <span className='comment_button'>{formatDate(this.state.post.created_at)}</span> */}

                    <div>
                        <div className='see_comment_button' onClick={this.handleSeeComments}>
                            {hasComments ? <span>&#x21AA;</span> : ""}
                            {hasComments ?  hasComments + " " + replyText : ""}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;