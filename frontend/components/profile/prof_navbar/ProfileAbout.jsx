import React, { Component } from 'react'


class ProfileAbout extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.handleWorkPlace = this.handleWorkPlace.bind(this);
        this.handleCurrentCity = this.handleCurrentCity.bind(this);
        this.handleRelationshipStatus = this.handleRelationshipStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = props;
    }
    handleWorkPlace(e){
        let newUser = Object.assign({}, this.state.user);
        newUser.work_place = e.currentTarget.value;
        this.setState({ user: newUser })
    }
    handleCurrentCity(e){
        let newUser = Object.assign({}, this.state.user);
        newUser.current_city = e.currentTarget.value;
        this.setState({ user: newUser })
    }
    handleRelationshipStatus(e){
        let newUser = Object.assign({}, this.state.user);
        newUser.relationship_status = e.currentTarget.value;
        this.setState({ user: newUser})
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        this.props.updateUser(this.props.currentUser.id, this.state.user)
    }
    render() {
        const {user} = this.state;
        return (
            <div>
                <div className='profile_about_wrapper'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='profile_about_input'>
                            <input placeholder='Add a workplace'
                                value={user.work_place !== null 
                                ? user.work_place : ''}
                            onChange={this.handleWorkPlace} />
                        </div>
                        <div className='profile_about_input'>
                            <input placeholder='Add your current city'
                            value={user.current_city !== null
                                ? user.current_city : ''}
                            onChange={this.handleCurrentCity} />
                        </div>
                        <div className='profile_about_input'>
                            <input placeholder='Add your relationship status'
                                value={user.relationship_status !== null
                                    ? user.relationship_status : ''}
                            onChange={this.handleRelationshipStatus} />
                        </div>
                        <div className='profile_about_input'>
                            <input type='submit' />
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default ProfileAbout;