import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/RouteUtil'
import AuthViewContainer from './auth/AuthViewContainer';
import HomeViewContainer from './home/HomeViewContainer';
import ProfileViewContainer from './profile/ProfileViewContainer';
import { Switch } from 'react-router-dom';

const App = () => (
    <div>
        <AuthRoute exact path='/' component={AuthViewContainer} />
        <ProtectedRoute exact path='/' component={HomeViewContainer} />
        <Switch>
            {/* <ProtectedRoute exact path='/profile' component={ProfileViewContainer} /> */}
            <ProtectedRoute path='/profile/:user_id' component={ProfileViewContainer} />
        </Switch>
    </div>
);


export default App;