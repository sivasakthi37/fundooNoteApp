import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
import '../App.css';
//import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
//import MenuItem from '@material-ui/core/MenuItem';
//import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/keepIcon.svg';
import SideMenuBar from '../components/Sidemenubar'
class DashBoardInput extends Component {
    render() {
        return (
            <div>
                <div className="root">
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <div>
                                < SideMenuBar />
                            </div>
                            <span>
                                <img src={logo} alt="logo" />
                            </span>
                            <span id="fundoodash">Fundoo
                                </span>

                            {/* <Typography id="title" variant="h6" color="inherit" noWrap>
                                Keep
                                 </Typography>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                />
                            </div> */}
                        </Toolbar>
                    </AppBar>

                </div>


            </div>
        )
    }
}
export default DashBoardInput;