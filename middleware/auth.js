const {getuser} = require('../utils/auth')
const asyncHandler = require('express-async-handler')


const handleloggedinuser = asyncHandler(async (req, res, next) => {
    const userUid = req.cookies.uid;

    if(!userUid) return res.send("userUid not found")
    const user = getuser(userUid)

    if(!user) return res.send("user not found")
    
    req.user = user
    next()
})

module.exports = handleloggedinuser