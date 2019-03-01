import React, { Component } from 'react';
import '../App.css';
import IconButton from '@material-ui/core/IconButton';
//import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import bulb from '../assets/bulbicon.svg';
import NotificationsIcon from '@material-ui/icons/Notifications';
import pencil from '../assets/pencil.svg';

import Archive from '../assets/archive.svg';
import Delete from '../assets/delete.svg'
import bellicon from '../assets/bellicon.svg';

class SideMenuBar extends Component {
    state = {
        open: false,
    };
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    handleToggle = () => {

        this.setState(state => ({ open: !state.open }))
    }

    render() {
        
        const { open } = this.state;
        return (

            <div>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleToggle}
                >
                    <MenuIcon />
                </IconButton>
                <div  className="MuiDrawer-paper-61">
                    <Drawer
                        // id="drawer"

                       
                        variant="persistent"
                        anchor="left"
                        open={open}
                    // id="drawerPaper"
                    >
                        <Divider />
                        <List>
                            {['Notes', 'Reminders'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <img src={bulb} alt="logo" /> : <img src={bellicon} alt="logo" />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            <p id="lable" >LABLES</p>
                            {['Edit labels'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <img src={pencil} alt="logo" /> : <NotificationsIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>

                        <Divider />

                        <List>
                            {['Archive', 'Trash'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <img src={Archive} alt="logo" /> : <img src={Delete} alt="logo" />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                    </div>

            </div>
        )

    }



}
export default SideMenuBar;