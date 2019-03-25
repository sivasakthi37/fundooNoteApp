import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import { withStyles } from '@material-ui/core/styles';

import { MuiThemeProvider, createMuiTheme, MenuItem } from '@material-ui/core'

import bulb from '../assets/bulbicon.svg';

import pencil from '../assets/pencil.svg';

import Archive from '../assets/archive.svg';
import Delete from '../assets/delete.svg'
import bellicon from '../assets/bellicon.svg';
const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },

    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    menuItem: {
        borderRadius: "0 25px 25px 0",
        '&:focus': {
          backgroundColor: "#fff9c4",
          borderRadius: "0 25px 25px 0",
       
        },
      },
      primary: {},
      icon: {},



});
const theme1 = createMuiTheme({
    overrides: {
        MuiDrawer:
        {
            paper: {
                top: 65,
                width: 275,
                borderColor: 'white',
            },
            paperAnchorDockedLeft:{
                borderRight:'white',
            }
        }

    }
})
/**
 * @description:This component is used to drawer ui ....
 */
class Drawercomponent extends Component {
   
    constructor() {
        super();
        this.state = {
            open: false,
            navigateReminder: false,
            navigateArchived: false,
            navigateTrashed: false,
           
        }
    }
    async handleNotes() {
        await this.setState({
            navigateReminder: false,
            navigateArchived: false,
            navigateTrashed: false,
        })
      
        this.props.handleNavigation(this.state.navigateReminder, this.state.navigateArchived, this.state.navigateTrashed);
    }
    async handleArchived() {
        await this.setState({
            navigateReminder: false,
            navigateArchived: true,
            navigateTrashed: false
        })
       
        this.props.handleNavigation(this.state.navigateReminder, this.state.navigateArchived, this.state.navigateTrashed);
    }
    render() {
        const { classes } = this.props;

        return (
            <div >
                <MuiThemeProvider theme={theme1}  >
        
                    <Drawer 
                        id="drawer"
                        variant="persistent"
                        anchor="left"
                        open={this.props.menustatus}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <MenuItem  className={classes.menuItem} onClick={() => this.handleNotes()}>
                            <img src={bulb} alt="logo"    style={{ marginRight: "31px" }}/>
                            Notes
                         </MenuItem>

                         <MenuItem  className={classes.menuItem}>
                            <img src={bellicon } alt="logo"    style={{ marginRight: "31px" }}/>
                            Reminders
                         </MenuItem>
                        <Divider />
                            <p id="lable" >LABLES</p>
                                     <MenuItem  className={classes.menuItem}>
                            <img src={pencil} alt="logo"    style={{ marginRight: "31px" }}/>
                            Edit labels
                         </MenuItem>
                        <Divider />
                        <Divider />
                        <MenuItem  className={classes.menuItem}  onClick={() => this.handleArchived()}>
                            <img src={Archive} alt="logo"    style={{ marginRight: "31px" }}/>
                            Archive
                         </MenuItem>

                         <MenuItem  className={classes.menuItem}>
                            <img src={Delete } alt="logo"    style={{ marginRight: "31px" }}/>
                            Trash
                         </MenuItem>
                    </Drawer>
            
                </MuiThemeProvider>
            </div>
        )
    }
}

Drawercomponent.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Drawercomponent);