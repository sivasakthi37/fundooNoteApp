import React, { Component } from 'react';
import Reminder from './Reminder'
import ColorPallete from './Color';
import UploadImage from '../components/image'
import Archive from './archive';
import MoreOptions from './Moreoptions';
// import Collaborator from '../components/collaborator'
class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.setState({ open: !this.state.open });
    }
    render() {
        const setNoteTime = parseInt(new Date().getHours()) >= 8 ? "PM" : "AM";
        return (

            <div>
                <div className="cardTools">
                    <Reminder parentToolsProps={setNoteTime}
                        reminder={this.props.reminder}
                        note={this.props.note} />
              

                    <ColorPallete
                        handleToggle={this.handleToggle}
                        toolsPropsToColorpallete={this.props.createNotePropsToTools}
                        noteID={this.props.noteID}
                      />

                     <UploadImage uploadImage={this.props.uploadImage}
                     /> 

                    <Archive
                        archiveNote={this.props.archiveNote}
                        archiveStatus={this.props.archiveStatus}
                        noteID={this.props.noteID}
                    />
                    <MoreOptions
                      
                       
                    />
        {/* <Collaborator/> */}
                </div>
            </div>
        )
    }
}
export default Tools;