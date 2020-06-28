
import React from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';
import {connect} from 'react-redux';
import {login, register} from '../../redux/userReducer';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: ''        }
        this.handleChange = this.handleChange.bind(this);

        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetInput() {
        this.setState({
            username: '',
            password: ''
        })
    }

    login = () => {
        this.props.login(this.state.username, this.state.password)
        .catch(() => {
            alert('Invalid username or password');
            this.resetInput();
        })
    }
    componentDidMount() {
        axios.get('/api/babydetails')
        .then(res => {
            this.setState({
                babydetails: res.data
            })
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
        let {firstname, lastname, username, password} = this.state
        let { user } = this.props;
        if (user.loggedIn) return <Redirect to="/" />;
        return (
            <div>
                <div className='main-container'>
                    <div className='input-container'>
                        <p></p>
                        <label>Fname:</label><input name='firstname' value={firstname} onChange={this.handleChange}/>
                        <label>Lname:</label><input name='lastname' value={lastname} onChange={this.handleChange}/>
                        <label className='login-label'>NAME</label><input className='input1' placeholder='Enter name' name='username' value={username} onChange={this.handleChange}/>
                        <br/>
                        <label className='login-label'>PASSWORD</label><input className='input2' type='password' placeholder='Enter password' name='password' value={password} onChange={this.handleChange}/>
                    
                        <div className='button-container'>
                            <button className='button' onClick={this.login}>Login</button>
                            <button className='button' onClick={this.register}>Register</button>
                        </div>
                    </div>
                </div>
                    <div className='handprints-container'>
                        <div className='handprints'></div>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user;
}

export default connect(mapStateToProps, {login, register} )(Login);