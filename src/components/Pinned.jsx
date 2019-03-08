import React, { Component } from 'react';
import '../App.css';
import pinnote from '../assets/pinnote.svg'
import unpin from '../assets/unpinned.svg'
import Tooltip from '@material-ui/core/Tooltip';


import IconButton from '@material-ui/core/IconButton';
class Pinned extends Component {
    state = {
        open: true,
    };

    handleToggle = () => {

        this.setState(state => ({ open: !state.open }))
    }

    render() {

        const { open } = this.state;
        return (
            <span id="pinalign"> 
                {open ?
                    <IconButton  onClick={this.handleToggle} >
                        <Tooltip title="un-pin">
                            <img src={unpin} alt="logo" />
                        </Tooltip>
                    </IconButton>
                    : 
                    <IconButton  onClick={this.handleToggle}>
                    <Tooltip title=" pin-note ">
                    <img src={ pinnote } alt="logo" />
                    </Tooltip>
                </IconButton>            
               }
            </span>

        )
    }
}

export default Pinned;