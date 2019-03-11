import React, { Component } from 'react';
import '../App.css';
import { IconButton } from '@material-ui/core';
import Remindericn from '../assets/Reminder.svg'
class Reminder extends Component {
    render() {
        return (
            <div id="toolalign">
              <IconButton >
              <img src={Remindericn} alt="logo"  />
              </IconButton>
            </div>

        )
    }
} 

export default Reminder;