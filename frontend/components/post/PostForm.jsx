import React, { Component } from 'react'


class PostForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form>
                    <input type="search" placeholder="Search" />
                </form>
            </div>
        )
    }
}

export default PostForm;