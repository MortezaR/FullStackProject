import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginFormContainer from './LoginFormContainer'
import SignupFormContainer from './SignupFormContainer'


class AuthView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div >
                        <LoginFormContainer />
                </div>
                <div>
                    <SignupFormContainer />
                </div>
                
            </div>
        )
    }
}

export default AuthView;