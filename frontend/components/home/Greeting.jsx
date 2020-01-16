import React, {Component} from 'react'

class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const { logout } = this.props;
        return(
            <button onClick={logout}>Logout</button>
        )
    }
}
export default Greeting;