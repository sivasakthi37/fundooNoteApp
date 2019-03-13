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

class noteModel {}

noteModel.prototype.CreateNote= (req, res) => {
    console.log("request in model==>",req.body);
    
    const userdata = new Note({
        "userId": req.body.userId,
        "title": req.body.title,
        "description": req.body.description,
        "reminder": req.body.reminder,
        "color": req.body.color,
        "image": req.body.image,
        "archive":req.body.archive,
        "pinned": req.body.pinned,
        "trash":req.body.trash
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
noteModel.prototype.getnote= (req, res) => {
    

    Note.find({userId:req.decoded.payload.user_id}, (err, data) => {

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









module.exports = new noteModel;







