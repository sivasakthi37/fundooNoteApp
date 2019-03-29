import React, { Component } from 'react';
import { Card} from '@material-ui/core';
import Tools from './Tools';
import Chip from '@material-ui/core/Chip';



class ArchivedNavigator extends Component {
    render() {
        let cardsView = this.props.noteProps ?  "cards":"CreateNote2" ;
       
        
        return (
            <div>
                                <label style={{ fontFamily: "georgia", fontSize: "15px", color: "grey", marginRight: "760px" }}>ARCHIVED</label>
                
                <div className="CardsView">
                    {this.props.archiveArray.map((key) => {
                        return (
                            <Card   id={cardsView}  style={{ backgroundColor: key.color}} >
                               <div id="displaycontentdiv1" >
                                        <div>
                                            <b> {key.title}</b>
                                        </div>
                                        <div>
                                            {key.description}
                                        </div>
                                        {key.reminder ?
                                            <Chip   id="chipcss"
                                                label={key.reminder}
                                                onDelete={() => this.props.reminderNote('', key._id)}
                                            />
                                            :
                                            null}
                                        <div id="displaycontentdiv">
                                            <Tools
                                                createNotePropsToTools={this.props.getColor}
                                                reminder={this.props.reminderNote}
                                                noteID={key._id}
                                                archiveStatus={key.archive}
                                                archiveNote={this.props.archiveNote}
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
export default ArchivedNavigator;