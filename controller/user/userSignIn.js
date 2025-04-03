const userModel = require("../../models/userModel")
const bcrypt = require('bcryptjs')

async function userSignInController(req, res){
    try{
        const {email, name, password} = req.body

        const user = await userModel.findOne({email})
        if (user){
            throw new Error("User already exists")
        }

        if (!email || !name || !password) {
            throw new Error("Please provide all the details")
        }
        
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = await bcrypt.hashSync(password, salt)

        if (!hashPassword){
            throw new Error("encryption issue")
        }

        const payload = {
            ...req.body,
            role: "USER",
            password: hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()
        
        res.status(201).json({
            data: saveUser,
            message: "User created successfully",
            success: true,
            error: false
        })
    } catch(err) {
        console.log(err)
        res.json({
            message: err.message || err,
            success: false,
            error: true
        })
    }
}

module.exports = userSignInController