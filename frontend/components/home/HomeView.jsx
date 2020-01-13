import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GreetingContainer from './GreetingContainer'


class HomeView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <GreetingContainer />
                </div>
            </div>
        )
    }
}

export default HomeView;