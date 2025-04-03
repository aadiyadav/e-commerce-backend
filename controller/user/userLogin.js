const userModel = require("../../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
// const cookie = require('cookie-parser')

async function userLogInController(req, res){
    try {
        const {email, password} = req.body
        if (!email || !password){
            throw new Error("Please enter all the details")
        }

        const user = await userModel.findOne({email})
        if (!user){
            throw new Error("User not found")
        }

        const checkPassword = await bcrypt.compare(password, user.password)
        
        if (checkPassword){
            const tokenData = {
                _id : user._id,
                email: user.email
            }
            const token = await jwt.sign(tokenData, process.env.TOKEN, {expiresIn: 60*60*8})
            
            const tokenOption = {
                httpOnly: true,
                secure: true
            }
            
            res.cookie("token", token, tokenOption).status(200).json({
                message: "Login sucessfully",
                data: token,
                success: true,
                error: false
            })
        } else{
            throw new Error("Incorrect password")
        }

    } 
    catch (err){
        res.json({
            message: err.message || err
        })
    }
}

module.exports = userLogInController