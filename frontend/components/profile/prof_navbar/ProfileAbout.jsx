import React, { Component } from 'react'


class ProfileAbout extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.handleWorkPlace = this.handleWorkPlace.bind(this);
        this.handleCurrentCity = this.handleCurrentCity.bind(this);
        this.handleRelationshipStatus = this.handleRelationshipStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user: this.props.user
        };
    }
    handleWorkPlace(e){
        let newUser = Object.assign({}, this.state.user);
        newUser.work_place = e.currentTarget.value;
        this.setState({ user: newUser })
        this.props.updateUser(newUser)
    }
    handleCurrentCity(e){
        let newUser = Object.assign({}, this.state.user);
        newUser.current_city = e.currentTarget.value;
        this.setState({ user: newUser })
        this.props.updateUser(newUser)
    }
    handleRelationshipStatus(e){
        let newUser = Object.assign({}, this.state.user);
        newUser.relationship_status = e.currentTarget.value;
        this.setState({ user: newUser})
        this.props.updateUser(newUser)
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        debugger
        this.props.updateUser(this.state.user)
    }
    render() {
        const {user} = this.state;
        const isUser = this.props.user.id === this.props.current_user.id
        // debugger
        return (
            <div>
                <div className='profile_about_title'>About</div>
                <div className='profile_about_wrapper'>
                    <form onSubmit={this.handleSubmit}>
                        <div className=''>
                            <div className='profile_about_input_header'>Work</div>
                            <input className={isUser ? 'profile_about_input' : 'profile_about_no_input'}
                            placeholder='Add a workplace'
                                value={user.work_place !== null 
                                ? user.work_place : ''}
                            onChange={this.handleWorkPlace} 
                                disabled={isUser ? "" : "disabled"}/>
                        </div>
                        <div className=''>
                            <div className='profile_about_input_header'>Current City</div>
                            <input className={isUser ? 'profile_about_input' : 'profile_about_no_input'}
                             placeholder='Add your current city'
                            value={user.current_city !== null
                                ? user.current_city : ''}
                            onChange={this.handleCurrentCity}
                                disabled={isUser ? "" : "disabled"}/>
                        </div>
                        <div className=''>
                            <div className='profile_about_input_header'>Relationship Status</div>
                            <input className={isUser ? 'profile_about_input' : 'profile_about_no_input'}
                             placeholder='Add your relationship status'
                                value={user.relationship_status !== null
                                    ? user.relationship_status : ''}
                            onChange={this.handleRelationshipStatus} 
                                disabled={isUser ? "" : "disabled"}/>
                        </div>  
                        <div className=''>
                            <input type='submit' className="hidden_submit_button" />
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default ProfileAbout;