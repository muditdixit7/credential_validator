var User = require("../store/Mongoose/user.js");
var Promise = require("es6-promise").Promise;
function checkIfUserEmailVerified(userEmailId) {
    //1)Check for null values
    //2) at the store level I have to generate and send token also
    var promise = new Promise(function (resolve,reject) {
          User.findByEmailId(userEmailId)
            .then(function success(user){
               resolve(user);
            },function error(err){
                reject(err);
            })
    });
    return promise;
}

function verifyEmail(userEmailId,token) {
    //1)Check for null values
   
    User.verifyUserEmailId(userEmailId,token);
}

exports.checkIfUserEmailVerified = checkIfUserEmailVerified;
exports.verifyEmail = verifyEmail;
