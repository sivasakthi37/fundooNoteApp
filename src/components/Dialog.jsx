import React, { Component } from 'react';
import { Dialog, DialogTitle, Input, Button, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Tools from './Tools';
//import EditPin from './editPin';




class DialogBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            note: "",
            title: "",
            description: "",
            color: "",
            _id: "",

        }
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.handleDescClick = this.handleDescClick.bind(this);
        this.getData = this.getData.bind(this);
    }
    async handleTitleClick(evt) {
        await this.setState({ title: evt.target.value })
    }

    async handleDescClick(evt) {
        await this.setState({ description: evt.target.value })
    }

    async handleToggle(e) {
        await this.props.editTitle(this.state.title, this.state.note._id)
        await this.props.editDescription(this.state.description, this.state._id)
        this.props.closeEditBox(e);
    }
    getData(note) {
        console.log("note in dialog==>", note.title);

        if (note.title !== undefined || note.description !== undefined) {
            this.setState({
                note: note,
                title: note.title,
                color: note.color,
                description: note.description,
                _id: note._id,
            })
        }
        console.log("bambjasjajasas", this.props.parentProps);

    }
    closeDialogPopper(e) {
        this.props.closeEditBox(e);
    }
    render() {
        // console.log("note on dialog----", this.props.createNotePropsToTools);


        return (

            <Dialog
               
                
                open={this.props.parentProps}
                noteID={this.props.noteID}

            >
                <div id="dialogbox" style={{ backgroundColor: this.state.color }} >
                    <DialogTitle>Edit Note</DialogTitle>


                    <div>
                        <Input
                            id="noteInputBase"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleTitleClick}
                            multiline
                            disableUnderline={true}


                        >
                        </Input>
                        {/* <Pinned pinstatus={this.handlepinned} /> */}
                    </div>
                    <div id="TakeNotealign" >
                        <Input
                            id="noteInputBase1"
                            disableUnderline={true}
                            value={this.state.description}
                            onChange={this.handleDescClick}
                            multiline
                            placeholder="Take a Note...."
                        >
                        </Input>
                    </div>
                    {/* {this.state.reminder ?
                                            <Chip   id="chipcss"
                                                label={this.state.reminder}
                                               //  onDelete={() => this.reminderNote('', noteArray[key]._id)}
                                            />
                                            :
                                            null} */}
                    <div className="cardToolsClose" >
                        <Tools
                            // reminder={this.handleReminder}
                            // uploadImage={this.handleimage}
                            // createNotePropsToTools={this.handleColor}
                            // archiveNote={this.handleArchive}
                            // archiveStatus={this.state.archive}
                        />
                        <span><Button onClick={this.handleToggle.bind(this)}>Close</Button></span>

                    </div>

                    </div>
            </Dialog>

        )
    }
}
export default DialogBox;





















                    // <div className="editDialog">
                    //     <Input
                    //         className="editTitleInput"
                    //         disableUnderline={true}
                    //         placeholder="Title"
                    //         value={this.state.title}
                    //         onChange={this.handleTitleClick}
                    //     />
                    //     {/* <EditPin /> */}
                    // </div>

                    // <Input
                    //     className="editNote"
                    //     disableUnderline={true}
                    //     placeholder="Note"
                    //     value={this.state.description}
                    //     onChange={this.handleDescClick}
                    // />
                    // <div style={{ display: "flex", flexDirection: 'row' }}>
                    //     <div id="displaycontentdiv">
                    //         <Tools />
                    //     </div>
                    //     <Button id="doneButton" onClick={this.handleToggle.bind(this)}>Close</Button>
                    // </div>
              