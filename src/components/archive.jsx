import React, { Component } from 'react';
import Archiveicon from '../assets/Archiveicon.svg';
import { Snackbar, Button, IconButton, Tooltip } from '@material-ui/core';
import closeIcon from '../assets/closeIcon.svg';
class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isArchived: false
        }
    }

    componentWillMount() {
        if (typeof this.props.archiveStatus !== "undefined") {
            this.setState({
                isArchived: this.props.archiveStatus
            })
        }
    }
    async handleArchive() {
        await this.setState({ isArchived: !this.state.isArchived });
        this.props.archiveNote(this.state.isArchived, this.props.noteID)
    }
    render() {
        return (
            this.state.isArchived ?
                <div>
                    <img src={Archiveicon}
                        onClick={() =>
                            this.handleArchive()
                        }
                        alt="archive note icon"
                        className="archiveIcon" />
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.open}
                        message={<span>Note archived</span>}
                        action={[
                            <Button key="undo" style={{ color: "#F1C40F" }} size="small" >
                                UNDO
                        </Button>,
                            <IconButton
                                onClick={this.handleClick}
                            >
                                <img src={closeIcon} alt="snackBar close" />
                            </IconButton>,
                        ]}
                    />
                </div>
                :
                <Tooltip title="Archive Note"   onClick={() =>
                    this.handleArchive()
                }>
                    <img src={Archiveicon}
                    alt="archive note icon"
                    className="archiveIcon"/>
                </Tooltip>
        )
    }
}
export default Archive;
