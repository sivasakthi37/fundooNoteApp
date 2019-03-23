
/**
 * @discription:import the express module..
 */
const express = require('express');
const route = express.Router();

/**
 * @description:require the controller to pass the data..
 */
var users = require('../controllers/user.controller');
/**
 * @description:require the controller to pass the data..
 */
var Middleware = require('../middleware/authentication');




var notes=require('../controllers/Note.controller');
/**
 * @description:define the api...
 */
route.post('/Login', users.login);

route.post('/Register', users.register);

route.post('/forgetpassword',users.finduser);

route.post('/reset/:token', Middleware.checkToken, users.setPassword);


route.post('/createNote', Middleware.checkTokenAuthentication, notes.createnote);

route.get('/getnotes',Middleware.checkTokenAuthentication,notes.getnote);


route.put('/updateColor',Middleware.checkTokenAuthentication,notes.updatecolor);


route.delete('/deleteNote',Middleware.checkTokenAuthentication,notes.deleteNote);

route.put('/isArchived',Middleware.checkTokenAuthentication,notes.isArchived);
module.exports = route; 