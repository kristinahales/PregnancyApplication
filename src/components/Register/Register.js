import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../../redux/userReducer';

class Register extends Component {
    constructor() {
        super()
            this.state = {
                username: '',
                password: '',
                firstname: '',
                lastname: ''   
            }
            this.register = this.register.bind(this);
            this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetInput() {
        this.setState({
            username: '',
            password: '',
            firstname: '',
            lastname: ''  
        })
    }

    register() {
        this.props.register(this.state.firstname, this.state.lastname, this.state.username, this.state.password)
        .catch(() => {
            alert('Username is already taken.');
            this.resetInput();
        })
    }

    render() {
        let {firstname, lastname, username, password} = this.state;
        let { user } = this.props;
        if (user.loggedIn) return <Redirect to="/" />;
        return (
            <div>
                <label>Fname:</label><input name='firstname' value={firstname} onChange={this.handleChange}/>
                <label>Lname:</label><input name='lastname' value={lastname} onChange={this.handleChange}/>
                <label className='login-label'>NAME</label><input className='input1' placeholder='Enter name' name='username' value={username} onChange={this.handleChange}/>
                <br/>
                <label className='login-label'>PASSWORD</label><input className='input2' type='password' placeholder='Enter password' name='password' value={password} onChange={this.handleChange}/>
                <button className='button' onClick={this.register}>Register</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user;
}

export default connect(mapStateToProps, {register})(Register);