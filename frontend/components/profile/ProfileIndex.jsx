import React, { Component } from 'react'
import PostIndexContainer from '../post/PostIndexContainer';
import ProfileIntroContainer from './ProfileIntroContainer';


class ProfileIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }
    componentDidMount() {
        const fetchUser = this.props.fetchUser(this.props.user_id)
        Promise.all([fetchUser]).then(() => { this.setState({ loaded: true }) })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user_id !== this.props.user_id) {
            this.props.fetchUser(this.props.user_id)
                .then(() => { this.setState({ loaded: true }) })
        }
    }
    render() {
        if (!this.state.loaded) {
            return (<div></div>)
        }
        return (
            <div className='profile_index'>
                <ProfileIntroContainer />
                <PostIndexContainer user={this.props.user}/>
            </div>
        )
    }
}

export default ProfileIndex;