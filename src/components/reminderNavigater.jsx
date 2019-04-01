import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import Tools from './Tools';
import Chip from '@material-ui/core/Chip';
import Pinned from './Pinned';


class ReminderNavigater extends Component {
    render() {
        let cardsView = this.props.noteProps ? "cards" : "CreateNote2";
        return (
            <div>
                {(this.props.remiderArray).length === 0 ?
                    <h1 style={{ fontFamily: "georgia", color: "grey" }}>Notes with upcoming reminders appear here</h1>
                    :
                    <label style={{ fontFamily: "georgia", fontSize: "15px", color: "grey", marginRight: "760px" }}>REMINDER</label>
                }
                <div className="CardsView">
                    {this.props.remiderArray.map((key) => {
                        return (
                            <Card id={cardsView} style={{ backgroundColor: key.color }} >
                                <div id="displaycontentdiv1" >
                                    <div id="pindiv">
                                        <b> {key.title}</b>
                                        < Pinned
                                            initialpinstatus={key.pinned}
                                            pinstatus={this.props.ispinned}
                                            noteID={key._id}
                                        />
                                    </div>
                                    <div>
                                        {key.description}
                                    </div>

                                    <Chip id="chipcss"
                                        label={key.reminder}
                                        onDelete={() => this.props.reminderNote('', key._id)}
                                    />
                                    <div id="displaycontentdiv">
                                        <Tools
                                            createNotePropsToTools={this.props.getColor}
                                            noteID={key._id}
                                            archiveStatus={key.archive}
                                            archiveNote={this.props.archiveNote}
                                            reminder={this.props.reminderNote}
                                            trashNote={this.props.trashNote}
                                        />
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
export default ReminderNavigater;