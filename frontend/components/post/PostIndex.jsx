import React, { Component } from 'react'
import PostContainer from './PostContainer' 
import PostFormContainer from './PostFormContainer';


class PostIndex extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.fetchPosts(this.props.currentUser.id)
    }
    render() {
        return (
            <div>
                <br></br>
                <div>
                    <PostFormContainer />
                </div>
                <br></br>
                <div id='post_header'>Posts</div>
                <ul>
                    {
                        this.props.posts.map((post) => (
                            <PostContainer key={post.id} post={post}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default PostIndex;