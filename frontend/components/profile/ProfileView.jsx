import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../navbar/NavbarContainer'
import ProfileNavBarContainer from './prof_navbar/ProfileNavBarContainer';
import { ProtectedRoute } from '../../util/RouteUtil';
import ProfileAboutContainer from './prof_navbar/ProfileAboutContainer';
import ProfileIndexContainer from './ProfileIndexContainer'
import ProfileFriendsContainer from './prof_navbar/ProfileFriendsContainer'

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
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user_id !== this.props.user_id) {
            this.props.fetchUser(this.props.user_id)
                .then(() => { this.setState({ loaded: true }) })
        }
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
                    <ProtectedRoute exact path='/profile/:id' component={ProfileIndexContainer} />
                    <ProtectedRoute path='/profile/:id/about' component={ProfileAboutContainer} />
                    <ProtectedRoute path='/profile/:id/friends' component={ProfileFriendsContainer} />
                    
                </Switch>
            </div>
        )
    }
}

export default ProfileView;