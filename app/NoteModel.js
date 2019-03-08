const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: [true, "userId is required"]
    },
    title: {
        type: String,
        require: [true, "Title is require"]
    },
    discription: {
        type: String, 
        require: [true, "email require"]
    },
    remindme: {
        type: String,
      
    },
    color: {
        type: String,
       
    },
    image:{
        type: String,
       
    },
    archive:{
        type: Boolean,
    },
    pinned:{
        type:Boolean,
    },
    trash:{
        type:Boolean,
    }
},
    {
        timestamps: true
    });

    const Note = mongoose.model('note', NoteSchema);














