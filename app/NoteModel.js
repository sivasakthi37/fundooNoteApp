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
    discription: {
        type: String,
        required: [true, "discription require"]
    },
    remindme: {
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
    const userdata = new Note({
        "userId": req.body.userId,
        "title": req.body.title,
        "discription": req.body.discription,
        "remindme": req.body.remindme,
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

module.exports = new noteModel;







