const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, "userId is required"]
    },
    title: {
        type: String,
        required: [true, "title is required"]

    },
    description: {
        type: String,
        required: [true, "discription require"]
    },
    reminder: {
        type: String,

    },
    color: {
        type: String,

    },
    image: {
        type: String,

    },
    archive: {
        type: Boolean,
    },
    pinned: {
        type: Boolean,
    },
    trash: {
        type: Boolean,
    }
},
    {
        timestamps: true
    });

const Note = mongoose.model('note', NoteSchema);

class noteModel { }

noteModel.prototype.CreateNote = (req, res) => {
    console.log("request in model==>", req.body);

    const userdata = new Note({
        "userId": req.body.userId,
        "title": req.body.title,
        "description": req.body.description,
        "reminder": req.body.reminder,
        "color": req.body.color,
        "image": req.body.image,
        "archive": req.body.archive,
        "pinned": req.body.pinned,
        "trash": req.body.trash
    });
    userdata.save((err, result) => {
        if (err) {
            console.log("Model not found");
            res(err);
        } else {
            console.log("Note saved sucessfully");
            res(null, result);
        }
    })
}
noteModel.prototype.getnote = (req, res) => {


    Note.find({ userId: req.decoded.payload.user_id }, (err, data) => {

        if (err) {
            console.log("error in chat models");
            res(err);
        }
        else {
            console.log("chat mode get data sucessfully");
            res(null, data);
        }
    })

}
noteModel.prototype.updatecolor = (paramID, paramData, res) => {

    Note.findOneAndReplace({
        _id: paramID

    },
        {
            $set: {
                color: paramData
            }
        },
        (err, data) => {

            if (err) {
                console.log("error in chat models");
                res(err);
            }
            else {
                console.log("chat mode get data sucessfully");
                res(null, paramData);
            }
        })
}

noteModel.prototype.deleteNote=(req, res) => {

    Note.deleteOne({ _id:req.body.noteID}, (err, result) => {
        if (err) {
            res(err)
        } else {
            console.log("result==>",result);
            
            const obj = {
                status: 200,
                msg: "note is deleted successfully",
                result:result
            }
             res(null, obj);
        }
    })
}

noteModel.prototype.isArchived = (paramID, paramData, res) => {

    Note.findOneAndUpdate(
        {
            _id: paramID
        },
        {
            $set: {
                archive: paramData,
                trash: false,
                pinned: false
            }
        },
        (err, result) => {
            if (err) {
                res(err)
            } else {

                return res(null, paramData)
            }
        });
}



noteModel.prototype.setReminder = (paramID, paramData, res) => {

    Note.findOneAndUpdate(
        {
            _id: paramID
        },
        {
            $set: {
                reminder: paramData,
                
            }
        },
        (err, result) => {
            if (err) {
                res(err)
            } else {

                return res(null, paramData)
            }
        });
}

noteModel.prototype.getTrashStatus = (id, callback) => {
  //  console.log("getTrashStatus",id);
    
    Note.findOne({ _id: id }, (err, result) => {
        //console.log("id", id);
        if (err) {
            callback(err)
        } else {
            console.log("status", result)
            return callback(null, result.trash)
        }
    })
}
noteModel.prototype.isTrashed = (noteID, trashStatus, callback) => {
    console.log("in model", noteID, trashStatus);
    Note.findOneAndUpdate(
        {
            _id: noteID
        },
        {
            $set: {
                trash: trashStatus.status,
                pinned: false,
                archive: false
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {

                return callback(null, trashStatus.status)
            }
        });
};



module.exports = new noteModel;







