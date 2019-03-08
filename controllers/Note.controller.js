
var noteservices=require('../services/Noteservices');

exports.createnote = (req, res) => {

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