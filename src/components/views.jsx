import React, { Component } from 'react';
import '../App.css';
import list from '../assets/listview.svg'
import grid from '../assets/grid.svg'
import Tooltip from '@material-ui/core/Tooltip';


import IconButton from '@material-ui/core/IconButton';
class Views extends Component {
    state = {
        open: true,
    };

    handleToggle = () => {

        this.setState(state => ({ open: !state.open }))
    }

    render() {

        const { open } = this.state;
        return (
            <div>
                {open ?
                    <IconButton  onClick={this.handleToggle} >
                        <Tooltip title="grid view">
                            <img src={grid} alt="logo" />
                        </Tooltip>
                    </IconButton>
                    : 
                    <IconButton  onClick={this.handleToggle}>
                    <Tooltip title="List view">
                    <img src={list} alt="logo" />
                    </Tooltip>
                </IconButton>

                    
               }



            </div>

        )
    }
}

export default Views;