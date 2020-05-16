import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ProfileNavBar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            loaded:false
        }
    }
    componentDidMount(){
        const fetchUser = this.props.fetchUser(this.props.user_id)
        Promise.all([fetchUser]).then(() => { this.setState({ loaded: true }) })
    }
    render() {
        if (!this.state.loaded) {
            return (<div></div>)
        }
        let {user} = this.props;
        return (
            <div className='profile_navbar_button_container'>
                <div className='profile_navbar_section'>
                    <div className='profile_picture'>
                        <div className='profile_name'>
                            {this.props.user.first_name + " " + this.props.user.last_name}
                        </div>
                    </div>
                    

                </div>
                <div className='profile_navbar_section2'>
                    <div className='profile_navbar_div'>
                        <Link to={'/profile/' + user.id} className='prof_navbar_button'>Timeline</Link>
                    </div>
                    <div className='profile_navbar_div'>
                        <Link to={'/profile/' + user.id + '/about'} className='prof_navbar_button'>About</Link>
                    </div>
                    <div className='profile_navbar_div last_div'>
                        <Link to={'/profile/' + user.id + '/friends'}   className='prof_navbar_button'>Friends</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileNavBar;