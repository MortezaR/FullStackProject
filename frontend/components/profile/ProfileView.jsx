import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../navbar/NavbarContainer'
import PostIndexContainer from '../post/PostIndexContainer';
import ProfileIntroContainer from './ProfileIntroContainer';
import ProfileNavBarContainer from './prof_navbar/ProfileNavBarContainer';
import { ProtectedRoute } from '../../util/RouteUtil';
import ProfileAboutContainer from './prof_navbar/ProfileAboutContainer';


class ProfileView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                    <ProfileNavBarContainer />
                    <h1>THIS IS THE PROFILE VIEW</h1>
                    <ProfileIntroContainer />
                    <PostIndexContainer />
                </div>
                <Route exact path='/profile/about' Component={ProfileAboutContainer} />
                <Switch>
                    <Route exact path='./profile/about' Component={ProfileAboutContainer}/>
                </Switch>
            </div>
        )
    }
}

export default ProfileView;