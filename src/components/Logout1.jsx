import React, { Component } from 'react';
import '../App.css';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Grid from '@material-ui/core/Grid';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    scrollContainer: {
        height: 400,
        overflow: 'auto',
        marginBottom: theme.spacing.unit * 3,
    },
    scroll: {
        position: 'relative',
        width: '230%',
        backgroundColor: theme.palette.background.paper,
        height: '230%',
    },
    legend: {
        marginTop: theme.spacing.unit * 2,
        maxWidth: 300,
    },
    paper: {
        maxWidth: 400,
        overflow: 'auto',
    },
    select: {
        width: 200,
    },
    popper: {
        zIndex: 1,
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${theme.palette.common.white} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${theme.palette.common.white} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${theme.palette.common.white} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${theme.palette.common.white}`,
            },
        },
    },
    arrow: {
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
});

/**
 * @description:This method is used to Logout ui.. 
 */
class Logout extends Component {

    state = {
        anchorEl: null,
        open: false,
    };
    /**
  * @description:This method is used to handle the Toggele event.. 
  */

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };
    /**
 * @description:This method is used to handle the close event.. 
 */
    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };
    /**
* @description:This method is used to handle the Logou Button event.. 
*/
    handlelogout = event => {
        event.preventDefault();

        this.props.props.props.history.push("/login");

    }
    /**
* @description:This method is used to handle the Register Button event.. 
*/
    handleregister = event => {
        event.preventDefault();
        this.props.props.props.history.push("/register");

    }


    render() {
        const { classes } = this.props;
        const { open, placement, disablePortal, flip, preventOverflow, arrow, arrowRef } = this.state;


       
        return (
            <div>
                <IconButton
                    buttonRef={node => {
                        this.anchorEl = node;
                    }}
                    aria-owns={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                >
                    <Grid container justify="center" alignItems="center">
                        <Avatar id="purpleAvatar">S</Avatar>
                    </Grid>
                </IconButton>

                <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <Popper
                                        //   id={id}
                                        open={open}
                                        anchorEl={this.anchorEl}
                                        placement={placement}
                                        disablePortal={disablePortal}
                                    //   className={classes.popper}

                                    >
                                        <Paper   >
                                            <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Let Google help apps determine location.
                      </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={this.handleClickButton} color="primary">
                                                    Disagree
                      </Button>
                                                <Button onClick={this.handleClickButton} color="primary">
                                                    Agree
                      </Button>
                                            </DialogActions>
                                        </Paper>
                                    </Popper>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        );
    }
}


export default Logout;
