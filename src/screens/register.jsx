import React, { Component } from 'react';
import RegisterInput from '../components/registerinput'
import '../App.css'
class Register extends Component {
    render() {
        return (

            <div>
                <RegisterInput props={this.props} />
            </div>

        )

    }

}

export default Register;