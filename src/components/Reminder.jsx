
import React, { Component } from 'react';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import { MenuItem, Paper, Tooltip, ListItem, createMuiTheme, MuiThemeProvider, ClickAwayListener } from '@material-ui/core'
const theme = createMuiTheme({
    overrides: {
        MuiMenuItem: {
            root: {
                borderbottomrightradius: 0,
                bordertoprightradius: 0,
                height: "13px",
                marginTop: "8px",
                marginBottom: "8px",
                width: "268px",
                fontSize: "12px",
            }
        },
        MuiPaper:{
            root:{
                zIndex:"1"
            }
        },
    },
    typography: {
        useNextVariants: true,
    },
})

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
    handleClose=()=>{
        this.setState(state=>({open:!state.open}))
    }
    setTodayReminder=()=> {
        this.handleClose();
        let ampm = parseInt(new Date().getHours()) >= 8 ? "PM" : "AM";
       
        var date = new Date().toDateString();
        console.log("date ==>",date);
        var reminder1 = date+ ", 8 "+ampm;
        // console.log(note.reminder);
       this.props.reminder( reminder1,this.props.noteID)
       
    }
    setTomorrowReminder=()=>{
        this.handleClose();
       
    }
    setWeeklyReminder=()=>{
        this.handleClose();
     
    }
    render() {
        // console.log(" anchorEl", anchorEl);
        // console.log(" placement", placement);
        
        
        const setAMPM = this.props.parentToolsProps;
        const { anchorEl, open, placement } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Tooltip title="Remind me">
                        <img src={require('../assets/Reminder.svg')} 
                        className="reminderIcon" 
                        onClick={this.handleClick('bottom-start')} alt="remider icon" />
                    </Tooltip>

                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition style={{zIndex:1}}>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper id="reminderPopper">
                                <ClickAwayListener onClickAway={this.handleClose}>

                                    <div>

                                        <ListItem className="listRemindr" >Reminder:</ListItem>
                                        <MenuItem className="currentDate" onClick={()=>this.setTodayReminder(this.props.note)}>
                                            <div>Later today</div>
                                            <div>8:00 {setAMPM}</div>
                                        </MenuItem>

                                        <MenuItem className="currentDate"  onClick={()=>this.setTomorrowReminder()}>
                                            <div>Tomorrow</div>
                                            <div>8:00 AM</div>
                                        </MenuItem>

                                        <MenuItem className="currentDate"  onClick={()=>this.setWeeklyReminder()}>
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
            </MuiThemeProvider>
        )
    }
}
export default Reminder;
