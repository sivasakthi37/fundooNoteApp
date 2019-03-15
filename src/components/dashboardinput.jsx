import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import logo from '../assets/keepIcon.svg';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Logout from './Logout';
import Tooltip from '@material-ui/core/Tooltip';
import Views from './views';
import Drawercomponent from './Drawermenu';
import Notecreate from './noteCreate';
//const drawerWidth = 10;

const styles = theme => ({
    root: {
        display: 'flex',
        // borderBottom: '1px solid',
        // borderBottomColor: '#d0cece'
    
    },

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,

    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),

        marginLeft: '10%',
    },

});
const theme1 = createMuiTheme({
    typography: {
        useNextVariants: true,

    },
});
/**
 * @description:This Compoenent  is main dashboard page ui....
 */
class Dashboardinput extends React.Component {
    state = {
        open: true,
        search:"",
    };

    /**
 * @description:This method is used to handle the Toggele event.. 
 */
    handleToggle = () => {
        try {
            this.setState(state => ({ open: !state.open }))
        } catch (err) {
            console.log(" handelToggle error in  dashboard");
        }
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <MuiThemeProvider theme={theme1}>
                <div className={classes.root} >
                    <CssBaseline />
                    <AppBar id="appbarroot"
                        position="fixed"
                        color="inherit"
                    >
                        <Toolbar >
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleToggle}
                            >
                                <Tooltip title="Main menu">

                                    <MenuIcon />
                                </Tooltip>
                            </IconButton>
                            <span>
                                <img src={logo} alt="logo" />
                            </span>
                            <Typography id="fundoodash" variant="h6" color="inherit" >
                                Fundoo
            </Typography>
                            <div id="search">
                                <div id="searchIcon">
                                    <IconButton>
                                        <Tooltip title="Search">
                                            <SearchIcon />
                                        </Tooltip>
                                    </IconButton>

                                </div>
                                <div id="searchField">
                                    <InputBase
                                     id="searchFields" 
                                    placeholder="Search" 
                                     className="inputRoot"
                                    onChange={this.handleChange('search')}
                                  // value={this.state.search}
                                    />
                                </div>
                            </div>
                            <div id="views">
                                <Views />
                            </div>
                            <div id="logout">
                                <Logout props={this.props} />
                            </div>
                        </Toolbar>
                    </AppBar>
                    <div >
                        <Drawercomponent menustatus={this.state.open} />
                    </div>
                    <main
                        className={classNames(classes.content, {
                            [classes.contentShift]: open,
                        })}
                    >
                        <div className={classes.drawerHeader} />
                        <Notecreate />
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

Dashboardinput.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Dashboardinput);
