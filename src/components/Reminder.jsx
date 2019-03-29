
import React, { Component } from 'react';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import { MenuItem, Paper, Tooltip, ListItem, ClickAwayListener } from '@material-ui/core';

class Reminder extends Component {
    state = {
        anchorEl: null,
        open: false,
        placement: null,
    };

    handleClick = placement => event => {
        const { currentTarget } = event;

        this.setState(state => ({
            anchorEl: currentTarget,
            open: state.placement !== placement || !state.open,
            placement,
        }));
    };
    handleClose = () => {
        this.setState(state => ({ open: !state.open }))
    }
    setTodayReminder = () => {
        this.handleClose();
        let ampm = parseInt(new Date().getHours()) >= 8 ? "PM" : "AM";

        var date = new Date().toDateString();
        console.log("date ==>", date);
        var reminder1 = date + ", 8 " + ampm;
        // console.log(note.reminder);
        this.props.reminder(reminder1, this.props.noteID)

    }
    setTomorrowReminder = () => {
        this.handleClose();
        let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"]
     
        var date = new Date().toDateString();
        date = date.replace(new Date().getDate().toString(), new Date().getDate() + 1);
        date = date.replace(days[new Date().getDay() - 1], days[new Date().getDay()]);
        var reminder1 = date + ", 8 AM";
        console.log("notereminder-->", reminder1);
        this.props.reminder(reminder1, this.props.noteID)
    }
    setWeeklyReminder = () => {
        this.handleClose();
       
    }
    render() {
       
        const setAMPM = this.props.parentToolsProps;
        const { anchorEl, open, placement } = this.state;
        return (

            <div>
                <Tooltip title="Remind me">
                    <img src={require('../assets/Reminder.svg')}
                        className="reminderIcon"
                        onClick={this.handleClick('bottom-start')} alt="remider icon" />
                </Tooltip>

                <Popper open={open} anchorEl={anchorEl} placement={placement} transition style={{ zIndex: 9999 }}>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper id="reminderPopper">
                                <ClickAwayListener onClickAway={this.handleClose}>

                                    <div>

                                        <ListItem >Reminder:</ListItem>
                                        <MenuItem onClick={() => this.setTodayReminder()}>
                                            <div>Later today</div>
                                            <div>8:00 {setAMPM}</div>
                                        </MenuItem>

                                        <MenuItem onClick={() => this.setTomorrowReminder()}>
                                            <div>Tomorrow</div>
                                            <div>8:00 AM</div>
                                        </MenuItem>

                                        <MenuItem onClick={() => this.setWeeklyReminder()}>
                                            <div>Next Week</div>
                                            <div>Mon, 8:00 AM</div>
                                        </MenuItem>
                                    </div>
                                </ClickAwayListener>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </div>
        )
    }
}
export default Reminder;
