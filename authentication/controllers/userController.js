const User = require('../models/userModel');

const userController = {};

// create a new user account
userController.createUser = (req, res, next) => {
  
  User.create({username: req.body.username, password: req.body.password}, (err, user) => {
    if (err) {
      return  next({error: 'error in signing up. this error'});
    } else {
      res.locals.id = user._id.toString();
      return next();
    }
  );
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = (req, res, next) => {
  // write code here
  User.findOne({username: req.body.username}, 'username password', (err, user) => {
    if (err){
      return next('error in user find one verify user', err) 
    }
    
    if (!user) {
      // redirect if incorrect pw or nonexistent user
      res.locals.signupFail = true;
      return res.status(200).send('/signupfail'); 
    }
    else {
      // check that password is correctly matching hashed password
      res.locals.id = user._id.toString();

      user.comparePw(req.body.password, function(err, isMatch) {
        if (isMatch) {
          return next();
        }
        else {
          return res.status(200).send('/signupfail'); 
        }
      }); 
    }

  });
};

module.exports = userController;