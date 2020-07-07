import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            pregnancydetails: []
            
        }
    }

    // componentDidMount() {
    //     axios.get('/api/pregnancydetails')
    //     .then(res => {
    //         this.setState({
    //             pregnancydetails: res.data
    //         })
    //     })
    // }

    render() {
        console.log(this.state.pregnancydetails)
        if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        return (
            <div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(Dashboard);