import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class SessionForm extends Component {
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
    this.props.processForm(user);
  }
  handleUsername(e){
    const input = e.currentTarget.value;
    this.setState({username: input});
    this.setState({email: input});
  }
  handlePassword(e){
    this.setState({password: e.currentTarget.value});
  }

  render(){
    const {username, password} = this.state;
    return (
      <div>
        <ul>
          {
            this.props.errors.map(error => {
              return <li>{error}</li>
            })
          }
        </ul>
      <h1>{this.props.formType}</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Username
          <input type="text" value={username} onChange={this.handleUsername}/>
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={this.handlePassword}/>
        </label>
        <input type="submit" value={this.props.formType}/>
      </form>
    </div>
    )
  }
}

export default SessionForm;