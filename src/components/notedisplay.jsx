
import React, { Component } from 'react';
import { Card, Chip, MuiThemeProvider, createMuiTheme, Tooltip, Avatar } from '@material-ui/core';
import Tools from './Tools';
import { getNotes, updateColor, updatePin, setReminder, isTrashed, updateArchiveStatus, deleteNoteForever, updateTitle, updateDescription } from '../services/note.services'

import DialogBox from './Dialog';
import '../App.css';
import { red } from '@material-ui/core/colors';
//import { otherArray} from '../services/note.services';
class Cards extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            notes: [],
            label: false,
          
        }
        console.log("constructor==>",);  
    }

    componentDidMount() {
        getNotes()
            .then((result) => {
                this.setState({
                    notes: result.data.result
                })
                console.log("get notes", result.data.result[0].title);
                console.log("this.state .notes", this.state.notes[0].title);

            })
            .catch((error) => {
                alert(error)
            });
    }

    displayNewCard(newCard) {
        this.setState({
            notes: [...this.state.notes, newCard]
        })
    }

    render() {
        //let otherArr = otherArray(this.state.notes);
        //   let otherArr = this.state.notes;
        console.log("this.state.notes00000000", this.state.notes);
                    
        return (
            <div>
                { Object.keys(this.state.notes).slice(0).reverse().map((key) => {
                        return (
                            <div>
                                
                                <Card id="CreateNote2" style={{ backgroundColor: this.state.notes[key].color }}>
                                    <div id="displaycontentdiv1" >
                                        <div>
                                            <b> {this.state.notes[key].title}</b>
                                            </div>
                                            <div>
                                                {this.state.notes[key].description}
                                            </div>
                                        <div id="displaycontentdiv">
                                            <Tools />
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
 export default Cards;