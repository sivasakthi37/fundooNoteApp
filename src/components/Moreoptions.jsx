import React, { Component } from 'react';

import moreoptions from '../assets/moreoptions.svg';

import Tooltip from '@material-ui/core/Tooltip';


class Moreoptions extends Component {

    render() {
        return (
            <div>
                    <Tooltip title="More options">
                        <img src={moreoptions} alt="logo" />
                    </Tooltip>
                


            </div>
        )
    }
}
export default Moreoptions;

