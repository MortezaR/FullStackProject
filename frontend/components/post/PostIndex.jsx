import React, { Component } from 'react'
import Post from './Post' 


class PostIndex extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.fetchPosts(this.props.currentUser.id)
        // this.setState({posts: this.props.fetchPosts(this.props.currentUser)});
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        // if(this.props.posts !== {}){
                        this.props.posts.map((post) => (
                            <Post key={post.id} post={post} fetchUser={this.props.fetchUser}/>
                        ))
                        // }
                    }
                </ul>
            </div>
        )
    }
}

export default PostIndex;