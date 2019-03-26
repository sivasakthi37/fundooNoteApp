import React, { Component } from 'react';
import { Card} from '@material-ui/core';
import Tools from './Tools';




class ArchivedNavigator extends Component {
    render() {
        let cardsView = this.props.noteProps ?  "cards":"CreateNote2" ;
       
        
        return (
            <div>
                <label className="archievedLabel" >ARCHIVED</label>
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
                                        <div id="displaycontentdiv">
                                            <Tools
                                                createNotePropsToTools={this.getColor}
                                               
                                                noteID={key._id}
                                                archiveStatus={key.archive}
                                                archiveNote={this.props.archiveNote}
        
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