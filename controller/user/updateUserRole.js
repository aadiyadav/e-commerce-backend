const userModel = require("../../models/userModel")

async function updateUserRole(req, res){
    try{
        const {userId, name, role} = req.body
        
        const payload = {
            ...(name && {name: name}),
            ...(role && {role: role})
        }

        const updateUserRole = await userModel.findByIdAndUpdate(userId, payload)

        res.json({
            data: updateUserRole,
            message: "User updated!",
            success: true,
            error: false
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            success: true,
            error: false
        })
    }
}

module.exports = updateUserRole