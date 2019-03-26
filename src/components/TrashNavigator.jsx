import React, { Component } from 'react';
import { Card, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import TrashOptions from './trashOptions';


class TrashNavigator extends Component {
    render() {
        let cardsView = this.props.noteProps ? "cards" : "CreateNote2";
        return (
            <div>
                <label style={{ fontFamily: "georgia", fontSize: "15px", color: "grey", marginRight: "760px" }}>TRASHED</label>

                <div className="CardsView" >
                    {this.props.trashArray.map((key) => {
                        return (
                            <Card  id={cardsView} style={{ backgroundColor: key.color, borderRadius: "10px", border: "1px solid #dadce0" }} >
                                <div id="displaycontentdiv1" >
                                    <div>
                                        <b> {key.title}</b>
                                    </div>
                                    <div>
                                        {key.description}
                                    </div>
                                    <div id="displaycontentdiv">
                                    <TrashOptions
                                    restore={this.props.trashNote}
                                    noteID={key._id}
                                    deleteNote={this.props.deleteNote} />

                                    </div>
                                </div >
                            </Card>
                        )
                    })
                    }
                </div>
            </div>


        )
    }
}
export default TrashNavigator;