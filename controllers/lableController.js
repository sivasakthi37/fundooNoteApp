// const labelServices = require('../services/lableservices')

// exports.addLabel = (req, res) => {
//     try {
//          console.log("in Controller", req.body, req.decoded,);

//         var res_result = {};
//         req.checkBody('label', 'label should not be empty').not().isEmpty();
//         //   req.checkBody('description', 'Description should notr be empty').not().isEmpty();
//         // req.checkBody('color', 'color is in Hex-decimal formate').isEmail();
//         // req.checkBody('password', 'password is not valid').isLength({ min: 4 });
//         var errors = req.validationErrors();
//         var response = {};
//         if (errors) {
//             response.success = false;
//             response.error = errors;
//             return res.status(422).send(response);
//         } else {
//             const labelData = {
//                 userID: req.decoded.payload.user_id,
//                 label: req.body.label
//             }
//             labelServices.addLabel(labelData, (err, result) => {
//                 if (err) {
//                     res_result.status = false;
//                     res_result.error = err;
//                     res.status(500).send(res_result);
//                 }
//                 else {

//                     res_result.status = true;
//                     res_result.data = result;
//                     res.status(200).send(res_result);
//                 }
//             })
//         }
//     }
//     catch (error) {
//         res.send(error)
//     }
// }

// exports.getLabels = (req, res) => {
//     try {
//       //  console.log("in Controller", req.decoded, req.decoded);

//         var res_result = {};

//         const labelData = {
//             userID: req.decoded.payload.user_id,
//         }
//         labelServices.getLabels(labelData, (err, result) => {
//             if (err) {
//                 res_result.status = false;
//                 res_result.error = err;
//                 res.status(500).send(res_result);
//             }
//             else {

//                 res_result.status = true;
//                 res_result.data = result;
//                 res.status(200).send(res_result);
//             }
//         })

//     }
//     catch (error) {
//         res.send(error)
//     }
// }

// exports.deleteLabel = (req, res) => {
//     try {
//        // console.log("in Controller", req.body);
//         var res_result = {};
//         req.checkBody('labelID', 'label should not be empty').not().isEmpty();
        
//         var errors = req.validationErrors();
//         var response = {};
//         if (errors) {
//             response.success = false;
//             response.error = errors;
//             return res.status(422).send(response);

//         } else {
//             const labelData = {
//                 labelID: req.body.labelID,
//             }
//             labelServices.deleteLabel(labelData, (err, result) => {
//                 if (err) {
//                     res_result.status = false;
//                     res_result.error = err;
//                     res.status(500).send(res_result);
//                 }
//                 else {

//                     res_result.status = true;
//                     res_result.data = result;
//                     res.status(200).send(res_result);
//                 }
//             })
//         }
//     }
//     catch (error) {
//         res.send(error)
//     }
// }

// exports.updateLabel = (req, res) => {
//     try {
//        // console.log("in Controller", req.body);

//         var res_result = {};
        
//         req.checkBody('labelID', 'label should not be empty').not().isEmpty();
//         req.checkBody('editlabel', 'editlabel should not be empty').not().isEmpty();
//         var errors = req.validationErrors();
//         var response = {};
//         if (errors) {
//             response.success = false;
//             response.error = errors;
//             return res.status(422).send(response);

//         } else {
//             const labelData = {
//                 editLabel: req.body.editlabel,
//                 labelID: req.body.labelID
//             }
//             labelServices.updateLabel(labelData, (err, result) => {
//                 if (err) {

//                     res_result.status = false;
//                     res_result.error = err;
//                     res.status(500).send(res_result);
//                 }
//                 else {

//                     res_result.status = true;
//                     res_result.data = result;
//                     res.status(200).send(res_result);
//                 }
//             })
//         }
//     }
//     catch (error) {
//         res.send(error)
//     }
// }