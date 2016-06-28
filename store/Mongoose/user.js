var mongoose = require("mongoose");
var Promise = require("es6-promise");
var User = new mongoose.Schema({
  name: string,
  email: string,
  gender: string,
  dateOfBirth: string,
  phoneNumber: string,
  verified:boolean,
  token:string
},{collection : "user"});


User.findByEmail = function(emailId) {
    var user = new User
    var promise = new Promise(function(resolve,reject){
        user.find({email:emailId})
        .then(function success(result){
            resolve(result);
        },function error(err){
            reject(err);
        })
    });
    return promise;
}

exports.User = mongoose.model('user',User);



//This is where i'll be providing all the functions regarding the user storing and fetching