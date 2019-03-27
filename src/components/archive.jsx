import React, { Component } from 'react';
import Archiveicon from '../assets/Archiveicon.svg';
import { Snackbar, Button, IconButton, Tooltip } from '@material-ui/core';
import closeIcon from '../assets/closeIcon.svg';
//import unArchive from '../assets/unArchive.svg';
import unArchive from '../assets/unArchive.svg';
class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isArchived: false
        }
    }
    // async handleArchive  () {
    //      await   this.setState({ isArchived: !this.state.isArchived });
    //     this.setState({ open: true });
    //     console.log("this.state.isArchived changed", this.state.isArchived);
    //     this.props.archiveNote(this.state.isArchived, this.props.noteID)
    // }
    handleArchive=()=> {
        console.log("this.props.archiveStatus in handle",this.props.archiveStatus);
        
        if (this.props.archiveStatus === false) {
            this.state.isArchived= true;
         //this.setState({ isArchived: true });
            this.setState({ open: true });
            console.log("this.state.isArchived changed", this.state.isArchived);
            this.props.archiveNote(this.state.isArchived, this.props.noteID)
        }
        else{
            this.setState({ isArchived: false });
           // this.state.isArchived= false;
        console.log(" this.state.isArchived changle else", this.state.isArchived);
        this.props.archiveNote(this.state.isArchived, this.props.noteID)
        }
    }



    handleClick = () => {
        this.setState({ open: false });

    }
    render() {
        console.log("first.props.archiveStatus", this.props.archiveStatus);

        // const { open } = this.state.open;
        return (
            this.state.isArchived ?
                <div>
                    <img src={unArchive }
                    onClick={() => this.handleArchive()}
                       // onClick={ this.handleArchive}
                        alt="archive note icon"
                    />
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
                <div>
                    <Tooltip title="Archive Note"
                      onClick={() => this.handleArchive()}
                     //onClick={this.handleArchive}
                     >
                        <img src={unArchive}
                            alt="archive note icon"
                        />
                    </Tooltip>
                    {/* <Snackbar
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
                        ]} */}
                    {/* /> */}
                </div>
        )
    }
}
export default Archive;









