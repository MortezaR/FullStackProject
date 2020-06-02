import React, { Component } from 'react'


class ProfileIntro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded:false
        };
    }
    componentDidMount(){
        const fetchUser = this.props.fetchUser(this.props.user_id)
        Promise.all([fetchUser]).then(() => {this.setState({loaded:true})})
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user_id !== this.props.user_id) {
            this.props.fetchUser(this.props.user_id)
                .then(() => { this.setState({ loaded: true }) })
        }
    }
    render() {
        const {user} = this.props
        if(!this.state.loaded || !user){
            return (<div></div>)
        }
        return (
            <div className='profile_intro_wrapper'>
                <div className='profile_intro_title'>Intro</div>
                <ul>
                    <li className='profile_into_list_item'>
                        {user.current_city !== '' && user.current_city !== null ? 
                        'Currently lives in' : 'Current City'} {user.current_city}</li>
                    <li className='profile_into_list_item'>
                        {user.work_place !== '' && user.work_place !== null ?
                            'Currently works at' : 'Work Place'} {user.work_place}</li>
                    <li className='profile_into_list_item'>
                        {user.relationship_status !== '' && user.relationship_status !== null ?
                        user.first_name + ' is ' : 'Relationship Status'} {user.relationship_status}</li>
                    {/* <li className='profile_into_list_item'> {user.gender}</li> */}
                </ul>
            </div>
        )
    }
}

export default ProfileIntro;