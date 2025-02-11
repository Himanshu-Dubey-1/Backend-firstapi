const jwt = require('jsonwebtoken')
const privatekey = "Lufy@123"


const setuser = ( user) => {
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, privatekey)
}

const getuser = (token) => {
    if(!token) return null
    try {
        return jwt.verify(token, privatekey)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {setuser, getuser}