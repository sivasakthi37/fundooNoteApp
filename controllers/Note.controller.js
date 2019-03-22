
var noteservices = require('../services/Noteservices');

exports.createnote = (req, res) => {
    console.log("req in controleer", req.body);

    req.checkBody('title', 'Title should not be empty').not().isEmpty();
    req.checkBody('description', 'Description should notr be empty').not().isEmpty();
    // req.checkBody('color', 'color is in Hex-decimal formate').isEmail();
    // req.checkBody('password', 'password is not valid').isLength({ min: 4 });
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        var responce = {}
        /**
         * @description:pass the request data to sevices....
         */
        noteservices.notecreate(req, (err, result) => {
            if (err) {
                responce.sucess = false;
                responce.result = err;
                res.status(500).send(responce);
            }
            else {
                responce.sucess = true;
                responce.result = result;
                res.status(200).send(responce);
            }
        })
    }


}
exports.getnote = (req, res) => {

    var responce = {}
    /**
     * @description:pass the request data to sevices....
     */
    noteservices.noteget(req, (err, result) => {
        if (err) {
            responce.sucess = false;
            responce.result = err;
            res.status(500).send(responce);
        }
        else {


            responce.sucess = true;
            responce.result = result;

            res.status(200).send(responce);
        }
    })


}



exports.updatecolor = (req, res) => {

    req.checkBody('noteID', 'noteID should notr be empty').not().isEmpty();
    req.checkBody('color', 'color should notr be empty').not().isEmpty();
    var responce = {}
    /**
     * @description:pass the request data to sevices....
     */
    noteID = req.body.noteID;
    color = req.body.color;
    noteservices.updatecolor(noteID,color, (err, result) => {
        if (err) {
            responce.sucess = false;
            responce.result = err;
            res.status(500).send(responce);
        }
        else {
            responce.sucess = true;
            responce.result = result;
            res.status(200).send(responce);
        }
    })


}
exports.deleteNote=(req,res)=>{
    req.checkBody('noteID', 'noteID should notr be empty').not().isEmpty();

    var responce = {}
    /**
     * @description:pass the request data to sevices....
     */
   
    noteservices.deleteNote(req, (err, result) => {
        if (err) {
            responce.sucess = false;
            responce.result = err;
            res.status(500).send(responce);
        }
        else {
            responce.sucess = true;
            responce.result = result;
            res.status(200).send(responce);
        }
    })



}