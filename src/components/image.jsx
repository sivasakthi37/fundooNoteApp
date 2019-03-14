import React, { Component } from 'react';
import { Tooltip } from '@material-ui/core';


class UploadImage extends Component {
    triggerInputFile=()=> {
        this.fileInput.click();
    }
    uploadImage=(evt)=> {
        console.log("upload image",evt.target.files[0]);
        this.props.uploadImage(evt.target.files[0])

        // getFile(e) {
        //     e.preventDefault();
        //     let reader = new FileReader();
        //     let file = e.target.files[0];
        //     reader.onloadend = (theFile) => {
        //         var data = {
        //             blob: theFile.target.result, name: file.name,
        //             visitorId:  this.props.socketio.visitorId
        //         };
        //         console.log(this.props.socketio);
        //         this.props.socketio.emit('file-upload', data);
        //     };
        //     reader.readAsDataURL(file);
        // }

    }
    render() {
        return (
            <span>
            <Tooltip title="Upload Image"> 
                <img src={require('../assets/galaryicon.svg')}
                    className="uploadImage"
                    alt="upload pic icon"
                    onClick={() => { this.triggerInputFile() }} />
            </Tooltip>
                <input ref={fileInput => this.fileInput = fileInput}
                    type="file" style={{ 'display': 'none' }}
                    className="uploadImage"
                    onChange={(evt)=>this.uploadImage(evt)}
                />
               
            </span>
        )
    }
}
export default UploadImage;