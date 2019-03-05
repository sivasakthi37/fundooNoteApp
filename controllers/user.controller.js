/**
 * @description:import the services file
 */
var userservices = require('../services/user.servies');
/**
 * @description:import the token file
 */
var gentoken = require('../middleware/tokens');
/**
 * @description:import the sendmail file
 */
const sendmail = require('../middleware/sendmail')

/**
 * @description:login is used to check the data is present in database or not..
 * @param {request from front end} req 
 * @param {responce from backend} res 
 */
exports.login = (req, res) => {
    //console.log("request in req",req.body);
    
    try {
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('password', 'password is not valid').isLength({ min: 4 })
        var errors = req.validationErrors();
        var responce = {};
        if (errors) {
            responce.sucess = false;
            responce.error = errors;
            res.status(422).send(responce);
        }
        else {
            var responce = {}
            /**
             * @description:pass the request data to sevices....
             */
            userservices.loginusers(req, (err, result) => {
                if (err) {
                    responce.sucess = false;
                    responce.result = err;
                    res.status(500).send(responce);
                }
                else {
                    const payload = {
                        user_id: result._id
                    }
                    const obj = gentoken.GenerateToken(payload);
                    console.log("object in controler==>",obj);
                    
                    responce.sucess = true;
                    responce.result = result;
                    responce.token = obj;
                    res.status(200).send(responce);
                }
            })
        }
    }
    catch (err) {
        console.log("error in controller :", err);
    }
}
/**
 * @description:register is used to register the user data in database...
 */
exports.register = (req, res) => {
    try {
        console.log("request in req",req.body);
        req.checkBody('firstname', 'Firstname is not valid').isLength({ min: 3 }).isAlpha();
        req.checkBody('lastname', 'Lastname is not valid').isLength({ min: 3 }).isAlpha();
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('password', 'password is not valid').isLength({ min: 4 });
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.success = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responcedata = {}
            userservices.registers(req, (err, result) => {
                if (err) {
                    responcedata.sucess = false;
                    responcedata.result = err;
                    res.status(500).send(responcedata);
                }
                else {
                    responcedata.sucess = true;
                    responcedata.result = "registration sucessfully";
                    res.status(200).send(responcedata);
                }
            })
        }
    }
    catch (err) {
        console.log("error in controller,", err);
    }
}
/**
 * @description:finduser use to find the data is present or not...
 */

exports.finduser = (req, res) => {
    try {
        req.checkBody('email', 'Email is not valid..').isEmail();
        var errors = req.validationErrors();
        var responce = {};
        if (errors) {
            responce.success = false;
            responce.error = errors;
            res.status(422).send(errors);
        }
        else {

            var respondresult = {};
            userservices.checkuser(req.body, (err, result) => {
                if (err) {
                    respondresult.success = false;
                    respondresult.result = err;
                    res.status(500).send(respondresult);
                }
                else {
                    console.log("result is true : " + result);
                    respondresult.success = true;
                    respondresult.result = result;
                    const payload = {
                        user_id: result[0]._id
                    }
                    //    console.log("payload in controlller=====>",payload);
                    const obj = gentoken.GenerateToken(payload);
                    const url = `http://localhost:3000/resetpassword/${obj.token}`;
                    sendmail.sendEMailFunction(url);
                    //Send email using this token generated     
                    console.log("url in controller");
                    res.status(200).send(url);
                }
            })
        }
    }
    catch (err) {
        console.log("error in controller,", err);
    }
}
/**
 * @description:setpassword is used to update the password in database...
 */
exports.setPassword = (req, res) => {
    try {
        console.log("controller in req==>",req.body);
        
        req.checkBody('password', 'password not valid ').isLength({ min: 4 });
        var errors = req.validationErrors();
        var responces = {};
        if (errors) {
            responces.sucess = false;
            responces.result = errors;
            res.status(422).send(errors);
        }
        else {
            var Responce = {};
            userservices.setpass(req, (err, result) => {
                if (err) {
                    Responce.success = false;
                    Responce.result = err;
                    res.status(500).send(Responce);
                }
                else {
                    Responce.success = true;
                    Responce.result = result;
                    res.status(200).send(Responce);
                }
            })
        }
    } catch (err) {
        console.log("error in controller,", err);
    }
}