import React, { Component } from 'react'
// import logo from '../.././photos/auth/facebook-logo.png'


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }
    handleUsername(e) {
        const input = e.currentTarget.value;
        this.setState({ username: input });
        this.setState({ email: input });
    }
    handlePassword(e) {
        this.setState({ password: e.currentTarget.value });
    }

    render() {
        const { username, password } = this.state;
        return (
            <div className='login_form'>
                {/* <img src={logo} alt="Logo" />; */}
                <div id='facebook_logo'>myFace</div>
                <ul>
                    {
                        this.props.errors.map(error => {
                            return <li className='error_message'>{error}</li>
                        })
                    }
                </ul>
                
                <form className='login_input' onSubmit={this.handleSubmit}>
                    <div className='email_input'>
                        <label id='email_label' htmlFor='email_input_box'>
                            Email
                        </label>
                            <input type="text" id='email_input_box' value={username} onChange={this.handleUsername} />
                    </div>
                    <div className='password_input'>
                        <label id='password_label' htmlFor='password_input_box'>
                            Password
                        </label>
                        <input type="password" id='password_input_box' value={password} onChange={this.handlePassword} />
                    </div>
                    <input type="submit" id='login_form_button' value='Log In' />
                </form>
            </div>
        )
    }
}

export default LoginForm;