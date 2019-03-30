
import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import Tools from './Tools';
import { getNotes } from '../services/note.services';
import ArchivedNavigator from './ArchivedNavigator';
import Chip from '@material-ui/core/Chip';
import DialogBox from './Dialog';
import '../App.css';
import Pinned from './Pinned';
import TrashNavigator from './TrashNavigator';
import ReminderNavigater from './reminderNavigater';
import { updateColor, updateArchiveStatus, otherArray, archiveArray, setReminder, isTrashed, trashArray, deleteNote, remiderArray, updateTitle, updateDescription, updatePin, pinArray } from '../services/note.services';
class Cards extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            open1: false,
            open2: false,
            notes: [],
            label: false,
        }
        // this.handleClick = this.handleClick.bind(this);
        this.cardsToDialogBox = React.createRef();
    }

   async handleClick1 (note) {
       await this.setState({ open1: true })
        console.log("dilog note in notedisplay==>", note);

        this.cardsToDialogBox.current.getData(note);
    }
   async closeEditBox () {
       await this.setState({ open1: false })
    }

    handleClick2 = (note) => {
        this.setState({ open2: true })
        console.log("dilog note in notedisplay==>", note);

        this.cardsToDialogBox.current.getData(note);
    }
    closeEditBox = () => {
        this.setState({ open1: false })
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
                console.log(error);
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
        //  console.log("value in archive==>",isArchived);

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
                console.log(error);
            });
    }
    reminderNote = (value, noteId) => {
        const remindMe = {
            noteID: noteId,
            reminder: value
        }
        //   console.log("reminder-->value", remindMe);

        setReminder(remindMe)
            .then((result) => {
                let newArray = this.state.notes
                //   console.log("result in the reminder===>", result);
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i]._id === noteId) {
                        newArray[i].reminder = result.data.result;
                        this.setState({
                            notes: newArray
                        })
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    trashNote = (noteId) => {
        const trash = {
            noteID: noteId
        }
        isTrashed(trash)
            .then((result) => {
                let newArray = this.state.notes
                //  console.log("hai hellow how are u==>", result);

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
                console.log(error);

            });
    }
    deleteNote1 = (noteId) => {
        const deletedata = {
            noteID: noteId
        }
        deleteNote(deletedata)
            .then((result) => {
                //  console.log("delete note result==>", result);
                let newArray = this.state.notes
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i]._id === noteId) {
                        newArray.splice(i, 1);
                        this.setState({
                            notes: newArray
                        })
                    }
                }
            })
            .catch((err) => {
                console.log("delete from the backend=> error");
            })
    }
    editTitle = (value, noteId) => {
        const Title = {
            noteID: noteId,
            Title: value
        }
        // console.log("title note result==>",Title);
        updateTitle(Title)
            .then((result) => {
                //console.log("title note result==>", result.data.result);
                let newArray = this.state.notes
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i]._id === noteId) {
                        newArray[i].title = result.data.result;
                        this.setState({
                            notes: newArray
                        })
                    }
                }
            })
    }
    editDescription = (value, noteId) => {
        const description = {
            noteID: noteId,
            Description: value
        }
        // console.log("discription note result==>",description);
        updateDescription(description)
            .then((result) => {
                //  console.log("discription note result==>", result.data.result);
                let newArray = this.state.notes
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i]._id === noteId) {
                        newArray[i].description = result.data.result;
                        this.setState({
                            notes: newArray
                        })

                    }
                }
            })
    }

    ispinned = (value, noteId) => {
        const isPinned = {
            noteID: noteId,
            pinned: value
        }
        updatePin(isPinned)
            .then((result) => {
                console.log("discription note result==>", result);
                let newArray = this.state.notes
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i]._id === noteId) {
                        newArray[i].archive = false;
                        newArray[i].trash = false;
                        newArray[i].pinned = result.data.result;
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









    render() {
        let cardsView = this.props.noteProps ? "cards" : "CreateNote2";

        let noteArray = otherArray(this.state.notes);
        let pin = pinArray(this.state.notes)
        console.log("noteArray==============================>", noteArray);
        // console.log("noteArray==>", noteArray);
        // let noteArray = this.state.notes;
        if (this.props.navigateArchived) {

            return (
                <ArchivedNavigator
                    noteProps={this.props.noteProps}
                    // addLabelToNote={this.addLabelToNote}
                    archiveArray={archiveArray(this.state.notes)}
                    // othersArray={otherArray}
                    ispinned={this.ispinned}
                    getColor={this.getColor}
                    reminderNote={this.reminderNote}
                    trashNote={this.trashNote}
                    archiveNote={this.archiveNote}
                />
            )
        }
        else if (this.props.navigaterReminder) {

            return (
                <ReminderNavigater
                    ispinned={this.ispinned}
                    noteProps={this.props.noteProps}
                    remiderArray={remiderArray(this.state.notes)}
                    getColor={this.getColor}
                    trashNote={this.trashNote}
                    archiveNote={this.archiveNote}
                    reminderNote={this.reminderNote}
                />
            )
        }
        else if (this.props.navigaterTrash) {

            return (
                <TrashNavigator
                    trashArray={trashArray(this.state.notes)}
                    // pinNote={this.pinNote}
                    deleteLabelFromNote={this.deleteLabelFromNote}
                    // othersArray={otherArray(this.state.notes)}
                    noteProps={this.props.noteProps}
                    trashNote={this.trashNote}
                    deleteNote={this.deleteNote1}
                />
            )
        }
        else {
            return (
                <div>
                    <div>

                        {pinArray(this.state.notes).length !== 0 ?

                            <label style={{ fontFamily: "georgia", fontSize: "15px", color: "grey", marginRight: "760px" }}>PINNED</label> : null
                        }
                        <div className="CardsView">
                            {Object.keys(pin).slice(0).reverse().map((key) => {
                                return (
                                    <div >
                                        <Card id={cardsView} style={{ backgroundColor: pin[key].color }}>
                                            <div id="displaycontentdiv1" >
                                                <div id="pindiv"  >
                                                    <b onClick={() => this.handleClick1(pin[key])} > {pin[key].title}</b>
                                                    < Pinned
                                                        initialpinstatus={pin[key].pinned}
                                                        pinstatus={this.ispinned}
                                                        noteID={pin[key]._id}
                                                    />
                                                </div>
                                                {/* {this.state.open1 ? */}
                                                    <DialogBox
                                                        reminder1={pin[key].reminder}
                                                        reminder={this.reminderNote}
                                                        color1={pin[key].color}
                                                        ref={this.cardsToDialogBox}
                                                        parentProps={this.state.open1}
                                                        closeEditBox={this.closeEditBox}
                                                        note={pin[key]}
                                                        archiveNote={this.archiveNote}
                                                        editTitle={this.editTitle}
                                                        editDescription={this.editDescription}
                                                        createNotePropsToTools={this.getColor}

                                                    />
                                                    {/* : null
                                                } */}
                                                <div onClick={() => this.handleClick1(pin[key])} >
                                                    {pin[key].description}
                                                </div>
                                                {pin[key].reminder ?
                                                    <Chip id="chipcss"
                                                        label={pin[key].reminder}
                                                        onDelete={() => this.reminderNote('', pin[key]._id)}
                                                    />
                                                    :
                                                    null}
                                                <div id="displaycontentdiv">
                                                    <Tools
                                                        reminder={this.reminderNote}
                                                        createNotePropsToTools={this.getColor}
                                                        noteID={pin[key]._id}
                                                        archiveNote={this.archiveNote}
                                                        archiveStatus={pin[key].archive}
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

                    </div>
                    <div >
                        {pinArray(this.state.notes).length !== 0 && otherArray(this.state.notes).length !== 0 ?

                            <label style={{ fontFamily: "georgia", fontSize: "15px", color: "grey", marginRight: "760px" }}>OTHER</label> : null
                        }
                    </div>
                    <div className="CardsView">
                        {Object.keys(noteArray).slice(0).reverse().map((key) => {
                            return (
                                <div >
                                    <Card id={cardsView} style={{ backgroundColor: noteArray[key].color }}>
                                        <div id="displaycontentdiv1" >
                                            <div id="pindiv"  >
                                                <b onClick={() => this.handleClick2(noteArray[key])} > {noteArray[key].title}</b>

                                                < Pinned
                                                    noteArray={noteArray}
                                                    initialpinstatus={noteArray[key].pinned}
                                                    pinstatus={this.ispinned}
                                                    noteID={noteArray[key]._id}
                                                />
                                            </div>
                                            {/* <DialogBox
                                          //  color1={noteArray[key].color}
                                                ref={this.cardsToDialogBox}
                                                parentProps={this.state.open1}
                                                closeEditBox={this.closeEditBox}
                                                note={noteArray[key]}
                                                archiveNote={this.archiveNote}
                                                editTitle={this.editTitle}
                                                editDescription={this.editDescription}
                                                createNotePropsToTools={this.getColor}

                                            /> */}
                                            <div onClick={() => this.handleClick2(noteArray[key])} >
                                                {noteArray[key].description}
                                            </div>
                                            {noteArray[key].reminder ?
                                                <Chip id="chipcss"
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

                </div>

            );
        }
    }
}
export default Cards;