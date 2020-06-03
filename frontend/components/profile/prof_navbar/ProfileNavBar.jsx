import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FriendButtonContainer from '../../friend/FriendButtonContainer'


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
    componentDidUpdate(prevProps, prevState){
        if(prevProps.user_id !== this.props.user_id){
            this.props.fetchUser(this.props.user_id)
                .then(() => { this.setState({ loaded: true }) })
        }
    }
    render() {
        let {user} = this.props;
        if (!this.state.loaded || !user) {
            return (<div></div>)
        }

        return (
            <div className='profile_navbar_button_container'>
                <div className='profile_navbar_section'>
                    <div className='profile_picture'>
                        <div className='profile_name'>
                            {user.first_name + " " + user.last_name}
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
                    <div className='profile_navbar_div last_div'>
                        <FriendButtonContainer user_id={this.props.user_id} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileNavBar;