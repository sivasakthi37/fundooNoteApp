import React, { Component } from 'react';
import { Card, Chip, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
//import EditPin from '../editPin';
import Tools from './Tools';


const theme = createMuiTheme({
    overrides: {
        MuiChip: {
            root: {
                fontSize: 10,
                marginTop: 15,
                height: 20,
                backgroundColor: "rgba(0, 0, 0, 0.10)",
                padding: 2
            },
            deleteIcon: {
                width: 20,
                height: 20
            }
        },
    },
    typography: {
        useNextVariants: true,
    },
})
class ArchivedNavigator extends Component {
    render() {
         let cardsView = this.props.noteProps ? "listCards" : "cards";
        return (
            // <MuiThemeProvider theme={theme}>
            <div>
                <label className="archievedLabel" >ARCHIVED</label>
                <div className="CardsView">
                    {this.props.archiveArray.map((key) => {
                        return (
                            <Card id="CreateNote2" className={cardsView} style={{ backgroundColor: key.color, borderRadius: "10px", border: "1px solid #dadce0" }} >
                                <div>
                                    {/* <div>
                                        {key.img !== "" ?
                                            <img  className="commonImg"
                                             src={key.note.img} alt="cardImage"></img>
                                            : null}
                                    </div> */}
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <b>{key.title}</b>

                                        {/* <EditPin cardPropsToPin={this.props.pinNote}
                                            noteID={key.note._id}
                                            pinStatus={key.note.pinned}
                                        /> */}
                                    </div>
                                    <div>
                                        {key.description}
                                    </div>
                                    {/* {key.note.remindMe ?

                                        <Chip
                                            label={key.note.remindMe}
                                            onDelete={() => this.props.reminder("", key.note._id)} />
                                        :
                                        null}
                                    {key.note.label.length > 0 ?
                                        key.note.label.map((key1) => */}

                                    {/* <Chip
                                                label={key1}
                                                onDelete={() => this.props.deleteLabelFromNote(key1, key.note._id)}
                                            /> */}

                                    )
                                    :
                                    null}

                                </div>
                                <div className="noteicons">
                                    <Tools createNotePropsToTools={this.props.getColor}

                                        note={key}
                                        noteID={key._id}


                                        archiveStatus={key.archive}
                                        archiveNote={this.props.archiveNote}

                                    />

                                </div>
                            </Card>)
                    })
                    }
                </div>
                {/* </MuiThemeProvider> */}
            </div>
        )
    }
}
export default ArchivedNavigator;