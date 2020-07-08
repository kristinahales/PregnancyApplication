import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../../redux/userReducer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class Register extends Component {
    constructor() {
        super()
            this.state = {
                username: '',
                password: '',
                firstname: '',
                lastname: '',
                dateOfLastPeriod: new Date(),
                dueDate: null,
                numOfWeeks: 0,
                trimester: 0
            }
            this.register = this.register.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.handleDate = this.handleDate.bind(this);
            this.calculateDueDate = this.calculateDueDate.bind(this);
            this.calculateNumOfWeeks = this.calculateNumOfWeeks.bind(this);
            this.calculateTrimester = this.calculateTrimester.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDate = date => {
        this.setState({
            dateOfLastPeriod: date
        });
        toast(`If date is correct, click Confirm to continue.`, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            })
    };

    resetInput() {
        this.setState({
            username: '',
            password: '',
            firstname: '',
            lastname: ''
        })
    }

    register = () => {
        this.props.register(this.state.firstname, this.state.lastname, this.state.username, this.state.password, this.state.dateOfLastPeriod, this.state.dueDate, this.state.numOfWeeks, this.state.trimester)
        .catch(() => {
            alert('Username is already taken.');
            this.resetInput();
        })
    }

    calculateDueDate() {
        console.log("period date to calculate due date" + this.state.dateOfLastPeriod)
        let ms = this.state.dateOfLastPeriod.getTime() + 24192000000;
        let dateDue = new Date(ms);
        this.setState({
            dueDate: dateDue
        })
        this.calculateNumOfWeeks();
        
        document.getElementById("registerButton").disabled = false;
    }

    calculateNumOfWeeks() {
        console.log(this.state.dateOfLastPeriod)
        let lastPeriodDate = this.state.dateOfLastPeriod
        let today = new Date();
        const diffTime = Math.abs(today - lastPeriodDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffDays + " days");
        this.setState({numOfWeeks: Math.floor(diffDays / 7)})
        this.calculateTrimester();
    }

    calculateTrimester() {
        console.log(this.state.dateOfLastPeriod)
        let lastPeriodDate = this.state.dateOfLastPeriod
        let today = new Date();
        const diffTime = Math.abs(today - lastPeriodDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffDays + " days");
        if(Math.floor(diffDays / 7 < 13)) {
            this.setState({trimester: 1})
        } else if (Math.floor(diffDays / 7 < 27)) {
            this.setState({trimester: 2})
        } else {
            this.setState({trimester: 3})
        }
    }


    render() {
        console.log("state duedate" + this.state.dueDate)
        console.log("numofweeks" + this.state.numOfWeeks)
        console.log("trimester" + this.state.trimester)
        let {firstname, lastname, username, password, dateOfLastPeriod} = this.state;
        let { user } = this.props;
        if (user.loggedIn) return <Redirect to="/" />;

        return (
            <div>
                <label>First Name:</label><input name='firstname' value={firstname} onChange={this.handleChange}/><br/>
                <label>Last Name:</label><input name='lastname' value={lastname} onChange={this.handleChange}/><br/>
                <label className='login-label'>Username:</label><input className='input1' placeholder='Enter name' name='username' value={username} onChange={this.handleChange}/><br/>
                <label className='login-label'>Password:</label><input className='input2' type='password' placeholder='Enter password' name='password' value={password} onChange={this.handleChange}/><br/>
                <label>Date Of Last Period:</label>
                <DatePicker selected={dateOfLastPeriod} onChange={this.handleDate} />
                <button onClick={this.calculateDueDate}>Confirm</button>
                <button className='button' id="registerButton" onClick={this.register} disabled>Register</button>
                <Link to='/login'>Already a member?</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user;
}

export default connect(mapStateToProps, {register})(Register);