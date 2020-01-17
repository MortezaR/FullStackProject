import React, { Component } from 'react'
import randomWords from 'random-words'


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
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.generateRandomUser = this.generateRandomUser.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
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
    handleFirstName(e) {
        this.setState({ first_name: e.currentTarget.value });
    }
    handleLastName(e) {
        this.setState({ last_name: e.currentTarget.value });
    }
    handleGender(e) {
        this.setState({ gender: e.currentTarget.value });
    }
    generateRandomUser(){
        const cap = s => {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }
        let un = randomWords() + '@' + randomWords() + '.com';
        this.setState( { first_name: cap(randomWords()),
        last_name: cap(randomWords()),
        gender: 'other',
        username: un,
        email: un,
        password: randomWords()});
        
    }

    render() {
        const { username, password, first_name, last_name } = this.state;
        return (
            <div className='sign_up_form'>
                <div className='sign_up_ad_section'>
                    <h1 className='sign_up_ad_section_header'>
                        Connect with friends and the <br></br>
                        world around you on myFace.
                    </h1>
                    <p className='sign_up_ad_section_body'><span className='sign_up_ad_section_body_span1'>See photos and updates</span>
                    <span className='sign_up_ad_section_body_span2'> from friends in News Feed.</span></p>
                    <p className='sign_up_ad_section_body'><span className='sign_up_ad_section_body_span1'>Share what's new</span>
                    <span className='sign_up_ad_section_body_span2'> in your life on your Timeline.</span></p>
                    <p className='sign_up_ad_section_body'><span className='sign_up_ad_section_body_span1'>Find more</span>
                        <span className='sign_up_ad_section_body_span2'> of what you're looking for with myFace Search.</span></p>
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
                             value={first_name} onChange={this.handleFirstName} />
                            <input placeholder='Last Name' type="text" className='input_box_su name_box'
                             value={last_name} onChange={this.handleLastName} />
                        </div>
                        <div className='input_su'>
                            <input placeholder='Email' type="text" className='input_box_su' value={username} onChange={this.handleUsername} />
                        </div>
                        <div className='input_su'>
                            <input placeholder='New password' type="password" className='input_box_su' value={password} onChange={this.handlePassword} />
                        </div>
                        <div className='input_su'>
                            <span className='gen_bir_tag'>Gender</span>
                        </div>
                        <div className='input_su input_su_radio'>
                            <div className='radio-div'>
                                <input type="radio" name='Gender' className="radio_button" value="female" onChange={this.handleGender}/>Female
                            </div>
                            <div className='radio-div'>
                                <input type="radio" name='Gender' className="radio_button" value="male" onChange={this.handleGender}/>Male
                            </div>  
                            <div className='radio-div'>
                                <input type="radio" name='Gender' className="radio_button" value="other" onChange={this.handleGender}/>Other
                            </div>  
                        </div>
                        <div className='input_su'>
                            <span id='disclosure_text'>
                                By clicking sign-up, you are willing to trade away<br />
                                everything you own for the betterment of humanity.<br />
                                If you have any questions, please stop having them.
                            </span>
                        </div>
                        <input type="submit" className='sign_up_button' value='Sign Up' />
                        <button className='sign_up_button' onClick={this.generateRandomUser}>Demo Log In</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default SignupForm;