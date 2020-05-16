import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../navbar/NavbarContainer'
import PostIndexContainer from '../post/PostIndexContainer';
import ProfileIntroContainer from './ProfileIntroContainer';
import ProfileNavBarContainer from './prof_navbar/ProfileNavBarContainer';
import { ProtectedRoute } from '../../util/RouteUtil';
import ProfileAboutContainer from './prof_navbar/ProfileAboutContainer';
import ProfileIndex from './ProfileIndex'

class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }
    componentDidMount(){
        const fetchUser = this.props.fetchUser(this.props.user_id)
        Promise.all([fetchUser]).then(() => { this.setState({ loaded: true }) })
    }
    render() {
        if(!this.state.loaded){
            return <div></div>
        }
        return (
            <div className='profile_view'>
                <div>
                    <NavBar />
                    <ProfileNavBarContainer user_id={this.props.user_id}/>
                </div>
                <Switch>
                    <ProtectedRoute exact path='/profile/:id' component={ProfileIndex} />
                    <ProtectedRoute path='/profile/:id/about' component={ProfileAboutContainer} />
                    
                </Switch>
            </div>
        )
    }
}

export default ProfileView;