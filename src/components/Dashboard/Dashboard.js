import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Header from '../Header/Header'
import Symptoms from '../Symptoms/Symptoms';
import BabyDetails from '../BabyDetails/BabyDetails';
import '../Dashboard/Dashboard.css';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            pregnancydetails: []
        }
        this.formatDate = this.formatDate.bind(this);
        this.formatSize = this.formatSize.bind(this);
    }

    componentDidMount() {
        axios.get('/api/pregnancydetails')
        .then(res => {
            this.setState({
                pregnancydetails: res.data
            })
        })
    }

    formatSize(numofweeks, item) {
        if(numofweeks <= 2) {
            return `Your baby ${item}!`
        } else {
            return `Your baby is the size of a ${item}!`
        }
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
                <div key={item.numofweeks}>
                    <p className='numofweeks'>{`${item.numofweeks} weeks pregnant`}</p>
                    <p>{this.formatSize(item.numofweeks, item.item)}</p>
                    {/* <p>{"Your duedate is: " + this.formatDate(item.duedate)}</p> */}
                </div>
            )           
        })

        if (!this.props.user.user.loggedIn) return <Redirect to='/login'/>
        return (
            <div>
                <div className='headerContainer'>
                    <header className='headerText'>{details}</header>
                </div>
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