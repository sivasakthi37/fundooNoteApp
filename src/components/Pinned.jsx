import React, { Component } from 'react';
import '../App.css';
import pinnote from '../assets/pinnote.svg'
import unpin from '../assets/unpinned.svg'
import Tooltip from '@material-ui/core/Tooltip';


import IconButton from '@material-ui/core/IconButton';
class Pinned extends Component {
    state = {
        isPinned: true,
    };

    // handleToggle = () => {

    //     this.setState(state => ({ open: !state.open }))
    // }
    handleClick=()=> {
         this.setState({isPinned: !this.state.isPinned});
        this.props.pinstatus(this.state.isPinned);
    }

    render() {

        const { isPinned } = this.state;
        return (
            <span id="pinalign"> 
                {isPinned ?
                    <IconButton  onClick={this.handleClick} >
                        <Tooltip title="un-pin">
                            <img src={unpin} alt="logo" />
                        </Tooltip>
                    </IconButton>
                    : 
                    <IconButton  onClick={this.handleClick}>
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