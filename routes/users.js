var express = require('express');
var router = express.Router();
var userController = require("../controller/userController.js");

/* GET users listing. */
router.get('/sendMail', sendEmail);
router.get('/verifyEmail', verifyEmail);



function sendEmail(req, res, next) {
    //1)Check if the address is verified or not
    //2)If verified send the specific error
    //3)If not verified generate and save and send token to db and users
    //4)Match and verify the emial account
    //5)Verified ? send the appropriate message
    var userEmailId = "";
    if(req.body.userEmailId)
        userEmailId = userEmailId;
    userController.sendEmailToUser(userEmailId);
}

function verifyEmail(req, res, next) {
    //1)Check if the address is verified or not
    //2)If verified send the specific error
    //3)If not verified generate and save and send token to db and users
    //4)Match and verify the emial account
    //5)Verified ? send the appropriate message
    var token = "";
    var userEmailId = "";
    
    if(req.query.token)
        token = token;
    if(req.body.userEmailId)
        userEmailId = userEmailId;
        
    userController.verifyUserEmailId(userEmailId);
}


module.exports = router;
