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

const responseTime = require('response-time')

//const redis = require('redis');

const express = require('express');
/**
 * @description:login is used to check the data is present in database or not..
 * @param {request from front end} req 
 * @param {response from backend} res 
 */
exports.login = (req, res) => {
    //console.log("request in req",req.body);

    try {
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('password', 'password is not valid').isLength({ min: 4 })
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.sucess = false;
            response.error = errors;
            res.status(422).send(response);
        }
        // else {
        //     const app = express();

        //     // create and connect redis client to local instance.
        //     const client = redis.createClient();

        //     // Print redis errors to the console
        //     client.on('error', (err) => {
        //         console.log("Error " + err);
        //     });

        //     app.use(responseTime());

        //     // Extract the query from url and trim trailing spaces
        //     //  const query = (req.body.email+req.body._id).trim();
        //     // Build the Wikipedia API url

        //     const redisKey = req.body.email;
        //     // Try fetching the result from Redis first in case we have it cached
        //     return client.get(redisKey, (err, result) => {
        //         // If that key exist in Redis store
        //         // console.log("result==>", result);
        //         // console.log("hasi");
        //         if (result) {
        //             console.log('redis cache data ==>'+result);
        //             const resultJSON = JSON.parse(result);
        //             return res.status(200).send(resultJSON);
                
               // }
                 else {

                    var response = {}
                    /**
                     * @description:pass the request data to sevices....
                     */
                    userservices.loginusers(req, (err, result) => {
                        if (err) {
                            response.sucess = false;
                            response.result = err;
                            res.status(500).send(response);
                        }
                        else {
                            const payload = {
                                user_id: result._id,
                                username : result.firstname,
                                email : result.email,
                                profilepic:result.profilepic,
                                sucess :true
                            }
                            const obj = gentoken.GenerateTokenAuthentication(payload);
                            console.log("object in controler==>", obj);
                            console.log("result", result);
                          //  response.sucess = true;
                         //   response.username = result.firstname;
                          //  response.email = result.email;
                         //   response._id = result._id;
                            response.token = obj;

                            // const redisKey = 'email_'+responce._id;
                            // client.set(redisKey, 86400, JSON.stringify(responce));
                          //  const redisKey = result.email;
                            console.log("rediskey", redisKey);

                            //client.set(redisKey, 86400, query);
                          //  client.setex(redisKey, 3600, JSON.stringify(response.token.token));
                            return res.status(200).send(response.token.token);
                        }
                    })
            //    }
          //  });

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
        console.log("request in req", req.body);
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
            var responsedata = {}
            userservices.registers(req, (err, result) => {
                if (err) {
                    responsedata.sucess = false;
                    responsedata.result = err;
                    res.status(500).send(responsedata);
                }
                else {
                    responsedata.sucess = true;
                    responsedata.result = "registration sucessfully";
                    res.status(200).send(responsedata);
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
        var response = {};
        if (errors) {
            response.success = false;
            response.error = errors;
            res.status(422).send(errors);
        }
        else {

            var respondresult = {};
            userservices.checkuser(req, (err, result) => {
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
                    const obj = gentoken.GenerateTokenresetpassword(payload);
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
        console.log("controller in req==>", req.body);

        req.checkBody('password', 'password not valid ').isLength({ min: 4 });
        var errors = req.validationErrors();
        var responses = {};
        if (errors) {
            responses.sucess = false;
            responses.result = errors;
            res.status(422).send(errors);
        }
        else {
            var response = {};
            userservices.setpass(req, (err, result) => {
                if (err) {
                    response.success = false;
                    response.result = err;
                    res.status(500).send(response);
                }
                else {
                    response.success = true;
                    response.result = result;
                    res.status(200).send(response);
                }
            })
        }
    } catch (err) {
        console.log("error in controller,", err);
    }
}

exports.setProfilePic = (req, res) => {
    try {
        // console.log("req-------------------->",req.decoded);
         console.log("req-------------------->",req.file)
        var responseResult = {};
        userId = req.decoded.payload.user_id;
        let image = (req.file.location)
        userservices.setProfilePic(userId, image, (err, result) => {
            console.log("imageeeeeeeeeeeeeeeeeeeeeeee  result pic=>", result);
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult)
            } else {
                responseResult.status = true;
                responseResult.data = result;
                res.status(200).send(responseResult);
            }
        })
    } catch (error) {
        res.send(error);
    }
}