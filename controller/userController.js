var userStore = require("../store/userStore.js");
var Promise = require("es6-promise");

function sendEmail(userEmailId) {
    //1)Check for null values
    //2)Check if verified
    //2)Save token to db
    //3)Fetch token and email and send confirmation email
    var promise = new Promise(function (resolve,reject) {
          User.findByEmailId(userEmailId)
            .then(function success(user){
                if(user.emailverified){

                }
                else{
                    var token = generateToken(userEmailId);
                    userStore.saveEmailVerificationToken(userEmailId,token);
                    userStore.sendEmailToUser(userEmailId);
                }
               resolve(user);
            },function error(err){
                reject(err);
            })
    });
    return promise;
    
}

function verifyEmail(userEmailId,token) {
    //1)Check for null values
   
    userStore.verifyUserEmailId(userEmailId,token);
}

function generateToken(userEmailId){
    
}

exports.sendEmail = sendEmail;
exports.verifyEmail = verifyEmail;
