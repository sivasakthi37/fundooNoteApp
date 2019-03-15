/***************************************************************************** 
* 
*  Purpose         : create fundoo application....
* 
*  @description    
* 
*  @file           : server.js
*  @overview       : create fundoo application.....
*  @author         : sivasakthi
*  @version        : 1.0
*  @since          : 19-02-2019
*
******************************************************************************/

/**
 * @description:express module one of light weight framework
 */
const express = require('express');
/**
 * @description:calling routers file..
 */
const routes = require('./routes/routes');
/**
 * @description:store the express() in app variable..
 */
const app = express();
/**
 * @description:mongoose module is used to database manupulation...
 */
const mongoose = require('mongoose');
/**
 * @description:require the config file to pass url
 */
const config = require('./config/mongodb.connection')
/**
 * @description:require the body-parser module it is use to parse your body object.......
 */
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var expressValidator = require('express-validator')
app.use(expressValidator());


app.get('/', (req, res) => {


    res.json("Im in localhost 8000")
})
/**
 * @description:pass your app control to router file
 */
app.use('/', routes);

/**
 * @description:you have to set the port to lisen the server...
 */
app.listen(8000, () => {
    console.log("see your local host 8000");
})

/**
 * @description:this is use to connect the database using moongoose... 
 */
mongoose.connect(config.url, { useNewUrlParser: true })
    .then((res) => {
        console.log("mongoose data base connected sucessfully");
    }).catch(err => {
        console.log("mongo db connection error", err);
        process.exit();
    })
/**
 * @description:export the express app to testing perpose....
 */
module.exports = app;


//const express = require('express');
// const responseTime = require('response-time')
// const axios = require('axios');
// const redis = require('redis');

// //const app = express();

// // create and connect redis client to local instance.
// const client = redis.createClient();

// // Print redis errors to the console
// client.on('error', (err) => {
//   console.log("Error " + err);
// });

// // use response-time as a middleware
// app.use(responseTime());
// var gentoken = require('./middleware/tokens');
// var userservices = require('./services/user.servies');
// //create an api/search route
// app.post('/Login', (req, res) => {
//   // Extract the query from url and trim trailing spaces
//   //console.log("controll enter the apifhgh",req.body);
  
//   const query = (req.body.email).trim();

  
//   // Build the Wikipedia API url
//   //const searchUrl = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${query}`;
// const searchUrl='http://localhost:3000/Login'
//   // Try fetching the result from Redis first in case we have it cached
//   return client.get('redisKey', (err, result) => {
//     // If that key exist in Redis store
  
//     if (result) {
//      // const resultJSON = JSON.parse(result);
//      // return res.status(200).json(resultJSON);
//      console.log("result in redis",result);
//      const resultJSON = JSON.parse(result);
//      return res.status(200).json(resultJSON);
//      // res.status(200).send(result);
//     } else { // Key does not exist in Redis store
//       // Fetch directly from Wikipedia API
//     //  return axios.post('/Login', data);
//     //app.use('/', routes);
//       var responce = {}
//             /**
//              * @description:pass the request data to sevices....
//              */
//             userservices.loginusers(req, (err, result) => {
//                 if (err) {
//                     responce.sucess = false;
//                     responce.result = err;
//                     res.status(500).send(responce);
//                 }
//                 else {
//                     const payload = {
//                         user_id: result._id
//                     }
//                     const obj = gentoken.GenerateToken(payload);
//                     console.log("object in controler==>",obj);
//                     console.log("result",result);
//                     responce.sucess = true;
//                     responce.username=result.firstname;
//                     responce.email=result.email;
//                     responce._id=result._id;
//                     responce.token = obj;

//                     //const responseJSON = response.data;
//                     // Save the Wikipedia API response in Redis store
//                     const redisKey = 'email_'+responce._id;
//                     client.set(redisKey, 86400, query);

//                   return  res.status(200).send(responce);
//                 }
//             })
//     }
//   });
// });