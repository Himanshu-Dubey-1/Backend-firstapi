
const User = require('../models/user');
const asyncHandler = require('express-async-handler');
const {setuser} = require('../utils/auth')

const signup = asyncHandler(async (req, res ) => {
    const {username, email, password} = req.body;
    const user = new User({username: username, email: email, password: password});
    try {
        await user.save()
        res.status(201).send("User created successfully");
    } catch (error) {
        res.status(401).send("signup wasn't successful")
    }

})

const login = asyncHandler(async (req, res ) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email, password});
        
        if(!user){
          return res.send("redirected to signup")
        }

        const token = setuser( user)
        res.cookie('uid', token)
        return res.status(201).send("User logged in successfully");
        
    } catch (error) {
        res.status(401).send("Invalid credentials");
    }
})

module.exports = {login, signup};