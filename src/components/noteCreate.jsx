import React, { Component } from 'react';
import '../App.css';
import { Input, Card, Button, Toolbar } from '@material-ui/core';
import Reminder from './Reminder';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Galary from '../assets/galaryicon.svg';
import Pinned from './Pinned';
/**
 * @description:This method is used to  note ui. 
 */
class Notecreate extends Component {
    state = {
        open: false,
        Title: "",
        Description: "",
        noteopen:false,
    };
    /**
     * @description:This method is used to handle the Toggele event.. 
     */
    handleToggle = () => {
        try {
            this.setState(state => ({ open: !state.open }))
        }
        catch (err) {
            console.log("handle toggle error in note create ");

        }
    }
    handleClose = () => {
        if (this.state.Title!==""||this.Description!==""){

            this.setState(state => ({ noteopen: !state.noteopen }))

        }
    }

    render() {
        const { open} = this.state;
        
        return (
            <div>
                {open ?
                    <div id="createNoteParent">
                        <ClickAwayListener onClickAway={this.handleToggle}>
                            <Card id="CreateNote1">
                                <div>
                                    <Input
                                        id="noteInputBase"
                                        multiline
                                        placeholder="Title...."
                                        disableUnderline={true}
                                        value={this.state.input}
                                    >
                                    </Input>
                                    <Pinned />
                                </div>
                                <div id="TakeNotealign" >
                                    <Input
                                        id="noteInputBase1"
                                        multiline
                                        placeholder="Take a Note...."
                                        disableUnderline={true}
                                        value={this.state.input1}
                                    >
                                    </Input>

                                    <div id="toolparent">
                                        <Toolbar>
                                            <Reminder />

                                        </Toolbar>


                                        <Button onClick={this.handleClose}>Close </Button>
                                    </div>

                                </div>
                            </Card>
                        </ClickAwayListener>
                    </div> :
                    <div id="createNoteParent">

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
                                <img src={Galary} alt="logo" />
                            </span>
                        </Card>
                    </div>
                }



            </div >

        )
    }
}

export default Notecreate;