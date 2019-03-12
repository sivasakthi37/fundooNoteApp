import React, { Component } from 'react';
import '../App.css';
import Remindericn from '../assets/Reminder.svg'
import { IconButton } from '@material-ui/core';
/**
 * @description:This Component is for Login UI.. 
 */
class Color extends Component {
    render() {
        return (
            <div>
             <IconButton >
              <img src={Remindericn} alt="logo"  />
              </IconButton> 
            </div>

        )
    }
}

export default Color;