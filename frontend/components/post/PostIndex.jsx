import React, { Component } from 'react'
import PostContainer from './PostContainer' 
import PostFormContainer from './PostFormContainer';


class PostIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded:false
        }
    }
    componentDidMount(){
        // debugger;
        const fetchUser = this.props.fetchUser(this.props.user_id)
            .then((user) => {
                this.props.fetchPosts(user.payload.user.id)
            })
        Promise.all([fetchUser]).then(() => { this.setState({ loaded: true }) })
    }
    render() {
        if (!this.state.loaded) {
            return (<div></div>)
        }
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