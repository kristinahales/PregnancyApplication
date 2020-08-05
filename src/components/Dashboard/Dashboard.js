import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Symptoms from '../Symptoms/Symptoms';
import BabyDetails from '../BabyDetails/BabyDetails';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            pregnancydetails: []
        }
        this.formatDate = this.formatDate.bind(this);
    }

    componentDidMount() {
        axios.get('/api/pregnancydetails')
        .then(res => {
            this.setState({
                pregnancydetails: res.data
            })
        })
    }

    formatDate(timestamp){
        var x=new Date(timestamp);
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        var dd = x.getDate();
        var mm = monthNames[x.getMonth()]
        var yy = x.getFullYear();
        return mm + " " + dd +", " + yy;
    }

    render() {
        console.log(this.state.pregnancydetails)
        let details = this.state.pregnancydetails.map((item, i) => {
            return (
                <div>
                    <h1>{"Welcome Back " + item.firstname + "!"}</h1>
                    <p>{"Your duedate is: " + this.formatDate(item.duedate)}</p>
                </div>
            )           
        })

        if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        return (
            <div>
                {details}
                <BabyDetails pregnancydetails={this.state.pregnancydetails}/>
                <Symptoms pregnancydetails={this.state.pregnancydetails}/>
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