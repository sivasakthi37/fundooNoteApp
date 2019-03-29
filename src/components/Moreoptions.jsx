
import React, { Component } from 'react';
import moreoptions from '../assets/moreoptions.svg';
import { MenuItem, Popper, Paper, Fade, Tooltip, ClickAwayListener, createMuiTheme, MuiThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                margin: "0px",
            },

        },
    },
    typography: {
        useNextVariants: true,
    },
})
class MoreOptions extends Component {
    constructor() {
        super();
        this.state = {

            anchorEl: null,
            open: false,
            placement: null,
        }
       
    }
    clickMoreOptions=(event)=> {
        const { currentTarget } = event;

        this.setState(state => ({
            anchorEl: currentTarget,
            open: !state.open,

        }));
    }
    handleTrashedNotes=()=> {
        this.handleClose();
        this.props.trashNote(this.props.noteID);
    }
    closeLabelPopper=()=> {
        this.setState({
            open: false
        })
    }


    handleClose=()=>{
        this.setState(state=>({open:!state.open}))
    }
   
    render() {
        const { anchorEl, open } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Tooltip title="More Options">
                        <img src={moreoptions}
                            onClick={this.clickMoreOptions}
                            className="moreOptionsIcon"
                            alt="more options icon" />

                    </Tooltip>

                    <Popper open={open} anchorEl={anchorEl} placement={'bottom-start'} transition style={{zIndex:9999 }}>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={0}>
                                <Paper className="moreOptionsPopper" >
                                    <ClickAwayListener onClickAway={() => this.closeLabelPopper()}>
                                        <div id="selectMoreOptions">

                                            <MenuItem id="moreOptionsMenu" onClick={this.handleTrashedNotes}>Delete Note</MenuItem>
                                            <MenuItem id="moreOptionsMenu" onClick={this.handleLabelsOnNote}>Add Label</MenuItem>

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
export default MoreOptions;