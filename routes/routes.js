
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

/**
 * @description:require the controller to pass the Notedata..
 */


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


route.post('/deleteNote',Middleware.checkTokenAuthentication,notes.deleteNote);

route.put('/isArchived',Middleware.checkTokenAuthentication,notes.isArchived);

route.put('/reminder',Middleware.checkTokenAuthentication,notes.setReminder);


route.put('/isTrash',Middleware.checkTokenAuthentication,notes.isTrash);

route.put('/editTitle',Middleware.checkTokenAuthentication,notes.editTitle);

route.put('/editDescription',Middleware.checkTokenAuthentication,notes.editDescription);


route.put('/updatePin',Middleware.checkTokenAuthentication,notes.updatePin);
module.exports = route; 