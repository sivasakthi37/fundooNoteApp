import React, { Component } from 'react';
import DashBoardInput from '../components/dashboardinput';
import '../App.css'
class DashBoard extends Component {
    render() {
        return (
            <div>
                <DashBoardInput props={this.props} />
            </div>
        )
    }
}
export default DashBoard;