
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
 * @description:define the api...
 */
route.post('/Login', users.login);
route.post('/Register', users.register);
route.post('/forgetpassword',users.finduser);
route.post('/reset/:token', Middleware.checkToken, users.setPassword);

module.exports = route; 