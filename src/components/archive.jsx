import React, { Component } from 'react';

import Archiveicon from '../assets/Archiveicon.svg';

import Tooltip from '@material-ui/core/Tooltip';


class Archive extends Component {

    render() {
        return (
            <div>
                    <Tooltip title="Archive">
                        <img src={Archiveicon} alt="logo" />
                    </Tooltip>
                


            </div>
        )
    }
}
export default Archive;

