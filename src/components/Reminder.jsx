import React, { Component } from 'react';
import '../App.css';

import Remindericn from '../assets/Reminder.svg'
import Fade from '@material-ui/core/Fade';
import Popper from '@material-ui/core/Popper';
import { MenuItem, Paper, Tooltip, ListItem, createMuiTheme, MuiThemeProvider, ClickAwayListener } from '@material-ui/core'
class Reminder extends Component {
    constructor(props) {
        super(props);
       this.state = {
            anchorEl: null,
            open: false,
            placement: null,
        };
    }
    setTodayReminder(note) {
        this.handleClose();
        let ampm = parseInt(new Date().getHours()) >= 8 ? "PM" : "AM";
        console.log("before", note);

        var date = new Date().toDateString();
        note.reminder = date + ", 8 " + ampm;
        console.log("note reminder",note.reminder);
        this.props.reminder(note.reminder, note._id)
    }
    
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

    render() {
        const setAMPM = this.props.parentToolsProps;
        const { anchorEl, open, placement } = this.state;
        return (
            <div>
                {/* <IconButton >
              <img src={Remindericn} alt="logo"  />
              </IconButton> */}
                <div>
                    <Tooltip title="Remind me">
                        <img src={Remindericn}
                            className="reminderIcon"
                            onClick={this.handleClick('bottom-start')} alt="remider icon" />
                    </Tooltip>

                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition style={{ zIndex: 1 }}>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper id="reminderPopper">
                                    <ClickAwayListener onClickAway={this.handleClose}>

                                        <div>

                                            <ListItem className="listRemindr" >Reminder:</ListItem>
                                            <MenuItem className="currentDate" onClick={() => this.setTodayReminder(this.props.note)}>
                                                <div>Later today</div>
                                                <div>8:00 {setAMPM}</div>
                                            </MenuItem>

                                            <MenuItem className="currentDate" onClick={() => this.setTomorrowReminder(this.props.note)}>
                                                <div>Tomorrow</div>
                                                <div>8:00 AM</div>
                                            </MenuItem>

                                            <MenuItem className="currentDate" onClick={() => this.setWeeklyReminder(this.props.note)}>
                                                <div>Next Week</div>
                                                <div>Mon, 8:00 AM</div>
                                            </MenuItem>

                                            <MenuItem className="currentDate">
                                                <div>Home</div>
                                                <div>Mumbai</div>

                                            </MenuItem>

                                        </div>
                                    </ClickAwayListener>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>



                </div>




            </div>

        )
    }
}

export default Reminder;