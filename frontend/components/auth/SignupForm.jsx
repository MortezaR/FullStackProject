import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SignupForm extends Component {
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
        this.props.signup(user);
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
            <div className='sign_up_form'>
                <div className='sign_up_ad_section'>
                    <h1 className='sign_up_ad_section_header'>
                        Connect with friends and the <br></br>
                        world around you on Facebook.
                    </h1>
                    <p className='sign_up_ad_section_body'><span className='sign_up_ad_section_body_span1'>See photos and updates</span>
                    <span className='sign_up_ad_section_body_span2'> from friends in News Feed.</span></p>
                    <p className='sign_up_ad_section_body'><span className='sign_up_ad_section_body_span1'>Share what's new</span>
                    <span className='sign_up_ad_section_body_span2'> in your life on your Timeline.</span></p>
                    <p className='sign_up_ad_section_body'><span className='sign_up_ad_section_body_span1'>Find more</span>
                    <span className='sign_up_ad_section_body_span2'> of what you're looking for with Facebook Search.</span></p>
                </div>
                <div className='sign_up_section'>
                    <h1 className='sign_up_header'>
                        Sign Up
                    </h1>
                    <h2 className='sign_up_header_2'>
                        It's quick and easy.
                    </h2>
                    <form className='sign_up_input' onSubmit={this.handleSubmit}>
                        <div className='input_su name_box_holder'>
                            <input placeholder='First Name' type="text" className='input_box_su name_box'
                             value={username} onChange={this.handleUsername} />
                            <input placeholder='Last Name' type="text" className='input_box_su name_box'
                             value={username} onChange={this.handleUsername} />
                        </div>
                        <div className='input_su'>
                            <input placeholder='Email' type="text" className='input_box_su' value={username} onChange={this.handleUsername} />
                        </div>
                        <div className='input_su'>
                            <input placeholder='New password' type="password" className='input_box_su' value={password} onChange={this.handlePassword} />
                        </div>
                        <input type="submit" id='sign_up_button' value='Sign Up' />
                    </form>
                </div>
                
            </div>
        )
    }
}

export default SignupForm;