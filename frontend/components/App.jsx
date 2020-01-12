import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/RouteUtil'
import GreetingContainer from './greetings/GreetingContainer'
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';
import AuthViewContainer from './auth/AuthViewContainer';

const App = () => (
    <div>
        {/* <GreetingContainer /> */}
        <AuthViewContainer />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
    </div>
);


export default App;