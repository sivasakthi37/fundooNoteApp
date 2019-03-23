
import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import Tools from './Tools';
import { getNotes } from '../services/note.services';
import ArchivedNavigator from './ArchivedNavigator';
//import DialogBox from './Dialog';
import '../App.css';
//import { red } from '@material-ui/core/colors';
import { updateColor, updateArchiveStatus, otherArray,archiveArray } from '../services/note.services';
class Cards extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            notes: [],
            label: false,
        }
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
        console.log("new Card==>", newCard);

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
                console.log("result in archive==>", result);

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


    render() {
        let otherArr = otherArray(this.state.notes);
        console.log("otherArr==>", otherArr);
        // let otherArr = this.state.notes;
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
        else {
            return (
                <div>
                    {Object.keys(otherArr).slice(0).reverse().map((key) => {
                        return (
                            <div>

                                <Card id="CreateNote2" style={{ backgroundColor: otherArr[key].color }}>
                                    <div id="displaycontentdiv1" >
                                        <div>
                                            <b> {otherArr[key].title}</b>
                                        </div>
                                        <div>
                                            {otherArr[key].description}
                                        </div>
                                        <div id="displaycontentdiv">
                                            <Tools
                                                createNotePropsToTools={this.getColor}
                                                noteID={this.state.notes[key]._id}
                                                archiveNote={this.archiveNote}
                                                archiveStatus={this.state.notes[key].archive}
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