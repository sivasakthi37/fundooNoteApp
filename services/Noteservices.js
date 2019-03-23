var notemodels=require('../app/NoteModel');
exports.notecreate = (req, res) => {
    try {
        notemodels.CreateNote(req, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:",err);
      

    }
}

exports.noteget = (req, res) => {
    try {
        notemodels.getnote(req, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:",err);
      

    }
}


exports.updatecolor = (paramID, paramData, res) => {
    try {
        notemodels.updatecolor(paramID, paramData, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:",err);
    }
}
exports.deleteNote=(req, res) => {
    try {
        notemodels.deleteNote(req, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:",err);
    
    }
}


exports.isArchived = (paramID, paramData, res) => {
    try {
        notemodels.isArchived(paramID, paramData, (err, data) => {
            if (err) {
                console.log("err in service..");
                res(err);
            }
            else {
                console.log("service is working fine");
                res(null, data);
            }
        })
    }
    catch (err) {
        console.log("error in services:",err);
    }
}