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