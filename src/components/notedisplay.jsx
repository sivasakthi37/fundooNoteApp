
import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import Tools from './Tools';
import { getNotes } from '../services/note.services';
import ArchivedNavigator from './ArchivedNavigator';
import Chip from '@material-ui/core/Chip';
//import DialogBox from './Dialog';
import '../App.css';
//import { red } from '@material-ui/core/colors';
import { updateColor, updateArchiveStatus, otherArray, archiveArray,setReminder, isTrashed } from '../services/note.services';
class Cards extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            notes: [],
            label: false,
        }
      //  this.reminderNote = this.reminderNote.bind(this);
    }
    componentDidMount() {
        getNotes()
            .then((result) => {
                this.setState({
                    notes: result.data.result
                })
                // console.log("get notes", result.data.result[0].title);
                // console.log("this.state .notes", this.state.notes[0].title);

            })
            .catch((error) => {
                alert(error)
            });
    }

    displayNewCard(newCard) {
       // console.log("new Card==>", newCard);

        this.setState({
            notes: [...this.state.notes, newCard]
        })

    }
    getColor = (value, noteId) => {


        const color = {
            noteID: noteId,
            color: value
        }
        //   console.log("color data==>",color);

        updateColor(color)
            .then((result) => {
                // console.log("data result in update",result);
                //  console.log("this.state.notes",this.state.notes);
                let newArray = this.state.notes;

                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i]._id === noteId) {
                        newArray[i].color = result.data.result;
                        this.setState({
                            notes: newArray
                        })
                    }
                }
            })
            .catch((error) => {

                console.log("error===>", error);

            });
    }
    archiveNote = (value, noteId) => {
        const isArchived = {
            noteID: noteId,
            archive: value
        }
        // console.log("value in archive==>",isArchived);

        updateArchiveStatus(isArchived)
            .then((result) => {
             //   console.log("result in archive==>", result);

                let newArray = this.state.notes
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i]._id === noteId) {
                        newArray[i].archive = result.data.result;
                        newArray[i].pinned = false;
                        newArray[i].trash = false;
                        this.setState({
                            notes: newArray
                        })
                    }
                }
            })
            .catch((error) => {
                alert(error)
            });
    }
    reminderNote=(value, noteId)=> {
        const remindMe = {
            noteID: noteId,
            reminder: value
        }
        console.log("reminder-->value",remindMe);
        
        setReminder(remindMe)
            .then((result) => {
                let newArray = this.state.notes
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i]._id === noteId) {
                        newArray[i].reminder = result.data.data;
                        this.setState({
                            notes: newArray
                        })
                    }
                }
            })
            .catch((error) => {
                alert(error)
            });
    }
    trashNote=(noteId)=> {
        const trash = {
            noteID: noteId
        }
        isTrashed(trash)
            .then((result) => {
                let newArray = this.state.notes

                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i]._id === noteId) {
                        newArray[i].trash = result.data.result;
                        newArray[i].pinned = false;
                        newArray[i].archive = false
                        this.setState({
                            notes: newArray,

                        })
                    }

                }

            })
            .catch((error) => {
                alert(error)
            });
    }

    render() {
        let noteArray = otherArray(this.state.notes);
       // console.log("noteArray==>", noteArray);
        // let noteArray = this.state.notes;
        if (this.props.navigateArchived) {

            return (
                <ArchivedNavigator
                    addLabelToNote={this.addLabelToNote}
                    archiveArray={archiveArray(this.state.notes)}

                    othersArray={otherArray}

                    getColor={this.getColor}
                    noteProps={this.props.noteProps}

                    trashNote={this.trashNote}
                    archiveNote={this.archiveNote}
                />
            )
        }
        // else if(this.props. navigaterTrash){

        //     return (
        //         // <TrashNavigator
        //         //     trashArray={trashArray(this.state.notes)}
        //         //     // pinNote={this.pinNote}
        //         //     deleteLabelFromNote={this.deleteLabelFromNote}
        //         //     // othersArray={otherArray(this.state.notes)}
        //         //     getColor={this.getColor}
        //         //     // noteProps={this.props.noteProps}
        //         //     trashNote={this.trashNote}
        //         //     deleteNote={this.deleteNote} 
        //         //     />
        //     )



        // }
        else {
            return (
                <div>
                    {Object.keys(noteArray).slice(0).reverse().map((key) => {
                        return (
                            <div>

                                <Card id="CreateNote2" style={{ backgroundColor: noteArray[key].color }}>
                                    <div id="displaycontentdiv1" >
                                        <div>
                                            <b> {noteArray[key].title}</b>
                                        </div>
                                        <div>
                                            {noteArray[key].description}
                                        </div>

                                        {noteArray[key].reminder ?

                                            <Chip
                                                label={noteArray[key].reminder}
                                                onDelete={() => this.reminderNote('', noteArray[key]._id)}
                                            />
                                            :
                                            null}

                                        <div id="displaycontentdiv">
                                            <Tools

                                               reminder={this.reminderNote}
                                                createNotePropsToTools={this.getColor}
                                                noteID={noteArray[key]._id}
                                                archiveNote={this.archiveNote}
                                                archiveStatus={noteArray[key].archive}
                                                trashNote={this.trashNote}

                                            />
                                        </div>
                                    </div >
                                </Card>
                            </div>
                        )
                    })
                    }
                </div>
            );
        }
    }
}
export default Cards;