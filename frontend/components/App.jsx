import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/RouteUtil'
import GreetingContainer from './home/GreetingContainer'
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';
import AuthViewContainer from './auth/AuthViewContainer';
import HomeViewContainer from './home/HomeViewContainer';

const App = () => (
    <div>
        {/* <GreetingContainer /> */}
        <AuthRoute path='/' component={AuthViewContainer} />
        <ProtectedRoute path='/' component={HomeViewContainer} />
        {/* <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} /> */}
    </div>
);


export default App;