const jwt = require("jsonwebtoken")

async function authToken(req, res, next){
    try{
        console.log("ok", req)
        const token = req.cookies?.token
        if (!token){
            return res.status(200).json({
                message: "Have you not logged in yet?",
                success: false,
                error: true
            })
        }

        jwt.verify(token, process.env.TOKEN, function(err, decoded){
            req.userId = decoded?._id
            next()
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false
        })
    }
}

module.exports = authToken