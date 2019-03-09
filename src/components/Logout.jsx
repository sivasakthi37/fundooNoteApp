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
      handlelogout=event=>{
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
      
        const { open } = this.state;

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
                    <MenuList> 
                      <MenuItem onClick={this.handleregister}>Add account</MenuItem>
                      <MenuItem onClick={this.handlelogout}>Logout</MenuItem>
                    </MenuList>
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
