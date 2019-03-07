import React, { Component } from 'react';
import '../App.css';

import LoginInput from '../components/logininput'
class Login extends Component {
    render() {
        return (
            <div>
                <LoginInput props={this.props} />
            </div>

        )
    }
}

export default Login;