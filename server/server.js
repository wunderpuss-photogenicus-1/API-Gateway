const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const port = 3000;

const mongoose = require('mongoose');

const userController = require('../authentication/controllers/userController');
const cookieController = require('../authentication/controllers/cookieController');
const sessionController = require('../authentication/controllers/sessionController');

app.use(express.json())
app.use(cookieParser())

// serve the home page
app.get('/', sessionController.verifyLogin, (req, res) => {
    if (res.locals.isLogged) res.send('is logged')
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})


// get the user signin information from frontend to login
// login information is inside request body
app.post('/signup', userController.createUser , cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {

})

// verify user is logged in. no subsequent middleware is activated unless user is verified. float the 
// check for verification at the last middleware, where it can be directed to different endpoints depending on the state of successful login
app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
    
    if (res.locals.signupFail) res.status(300).send('login fail')
    else {
        res.status(200).send('login success')
    }
})

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })