import React from 'react';
import {connect} from 'react-redux';
import {logout} from './../../redux/userReducer';

class Header extends React.Component {
    logout = () => {
        this.props.logout();
    }

    render() {
        return (
            <header className='header-container'>
                <button onClick={this.logout}>Logout</button>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {logout})(Header);