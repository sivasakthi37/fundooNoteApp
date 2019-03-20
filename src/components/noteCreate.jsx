import React, { Component } from 'react';
import '../App.css';
import { Input, Card, Button } from '@material-ui/core';
// import Reminder from './Reminder';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
//import Galary from '../assets/galaryicon.svg';
import Pinned from './Pinned';
import Tools from './Tools';
import UploadImage from '../components/image'
import { createnote } from '../services/note.services';
/**
 * @description:This method is used to  note ui. 
 */
class Notecreate extends Component {
    state = {
        open: false,
        Title: '',
        Description: '',
        Pinned: false,
        color: "rgb(255, 255, 255)",
        reminder: "",
        image: "",
        archive: false,
        trash: false,
        newNote: []

    };
    /**
     * @description:This method is used to handle the Toggele event.. 
     */
    handleToggle = () => {
        try {
            this.setState(state => ({ open: !state.open }))
            // console.log("this.state.Title !== ''", this.state.Title !== '');
            // console.log("this.Description !== ''", this.Description !== '');

            if (this.state.Title !== '' || this.state.Description !== '' || this.state.color !== "rgb(255, 255, 255)") {
              //  console.log("hai sivasakthi");

                var note = {
                    userId: localStorage.getItem("userId"),
                    title: this.state.Title,
                    description: this.state.Description,
                    pinned: this.state.Pinned,
                    color: this.state.color,
                    reminder: this.state.reminder,
                    image: this.state.image,
                    archive: this.state.archive,
                    trash: this.state.trash,
                }
                createnote(note)
                    .then((result) => {
                     //   console.log("result", result);

                        this.setState({
                            newNote: result.data.result

                        })
                        this.props.currentnote(this.state.newNote);
                        //console.log("createnote resulttttttttttttttttttttttttttttttttt", this.state.newNote);
                        // this.props.getNewNote(this.state.newNote)
                    })
                    .catch((error) => {

                        alert(error);
                    })

                this.setState({
                    title: '',
                    description: '',
                    reminder: '',
                    color: "rgb(255, 255, 255)",
                    image: '',
                    archive: false,
                    pinned: false,
                    trash: false,
                })
            }
        }
        catch (err) {
            console.log("handle toggle error in note create ");

        }
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    handlepinned = (value) => {

        this.setState({ Pinned: value });
    }
    handleReminder = (value) => {
        this.setState({ reminder: value })
    }
    handleColor = (value) => {
        this.setState({ color: value });
    }
    handleimage = (value) => {
        this.setState({  image: value });
    }
    handleArchive(value) {
        this.setState({ archive: value });
    }
    render() {

        const { open } = this.state;
        return (
            <div>
                {open ?

                    <div id="createNoteParent">
                        {/* <ClickAwayListener onClickAway={this.handleToggle}> */}
                        <Card id="CreateNote1" style={{ backgroundColor: this.state.color }}>
                            <div>
                                <Input
                                    id="noteInputBase"
                                    multiline
                                    placeholder="Title...."
                                    disableUnderline={true}
                                    onChange={this.handleChange('Title')}
                                // value={this.state.Title}
                                >
                                </Input>
                                <Pinned pinstatus={this.handlepinned} />
                            </div>
                            <div id="TakeNotealign" >
                                <Input
                                    id="noteInputBase1"
                                    multiline
                                    placeholder="Take a Note...."
                                    disableUnderline={true}
                                    onChange={this.handleChange('Description')}
                                // value={this.state.Description}
                                >
                                </Input>
                            </div>
                            <div className="cardToolsClose" >
                                <Tools
                              reminder={this.handleReminder}
                              uploadImage={this.handleimage}
                                    createNotePropsToTools={this.handleColor}
                                    archiveNote={this.handleArchive}
                                    archiveStatus={this.state.archive} />
                                <Button onClick={this.handleToggle}>Close</Button>
                            </div>
                        </Card>
                        {/* </ClickAwayListener> */}
                    </div> : <div id="createNoteParent">

                        <Card id="CreateNote">
                            <Input
                                id="noteInputBase"
                                multiline
                                placeholder="Take a Note...."
                                disableUnderline={true}
                                onClick={this.handleToggle}
                                readOnly={true}
                            >
                            </Input>
                            <span id="galaryalign">
                                < UploadImage />
                            </span>
                        </Card>
                    </div>


                }


            </div >

        )
    }
}

export default Notecreate;