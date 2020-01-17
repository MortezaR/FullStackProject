import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Buttons extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {currentUser} = this.props;
        return (
            <div className='navbar_button_container'>
                <div className='navbar_button_div'>
                    <Link to='/profile' className='navbar_button'>{currentUser.first_name}</Link>
                </div>
                <div className='navbar_button_div'>
                    <Link to='/' className='navbar_button'>Home</Link>
                </div>
                <div className='navbar_button_div'>
                    <button className='navbar_button'>More Buttons</button>
                </div>
            </div>
        )
    }
}

export default Buttons;