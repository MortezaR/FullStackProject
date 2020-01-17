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
    }
    render() {
        return (
            <div className='profile_view'>
                <div>
                    <NavBar />
                    <ProfileNavBarContainer />
                </div>
                <Switch>
                    <ProtectedRoute exact path='/profile' component={ProfileIndex} />
                    <ProtectedRoute path='/profile/about' component={ProfileAboutContainer}/>
                </Switch>
            </div>
        )
    }
}

export default ProfileView;