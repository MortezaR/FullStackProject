import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/RouteUtil'
import AuthViewContainer from './auth/AuthViewContainer';
import HomeViewContainer from './home/HomeViewContainer';
import ProfileViewContainer from './profile/ProfileViewContainer';

const App = () => (
    <div>
        <AuthRoute exact path='/' component={AuthViewContainer} />
        <ProtectedRoute exact path='/' component={HomeViewContainer} />
        <ProtectedRoute exact path='/profile' component={ProfileViewContainer} />
    </div>
);


export default App;