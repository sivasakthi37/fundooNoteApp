import React, { Component } from 'react';
import '../App.css';
import { Input, Card, Button, Toolbar } from '@material-ui/core';
import Reminder from './Reminder';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Galary from '../assets/galaryicon.svg';
import Pinned from './Pinned';
class Notecreate extends Component {
    state = {
        open: false,
    };

    handleToggle = () => {

        this.setState(state => ({ open: !state.open }))
    }


    render() {
        const { open } = this.state;
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

                                    >
                                    </Input>

                                    <div id="toolparent">
                                        <Toolbar>
                                            <Reminder />
                                        </Toolbar>


                                        <Button onClick={this.handleToggle}>Close </Button>
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