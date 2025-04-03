const addToCartModel = require("../../models/addToCartModel")

async function countCartProducts (req, res) {
    try {
        const user = req?.userId
        
        const count = await addToCartModel.countDocuments({
            userId: user
        })

        res.json({
            success: true,
            error: false,
            data: count,
            message: "Cart Count"
        })
    } catch (err) {
        res.json({
            success: false,
            error: true,
            message: err.message | message
        })
    }
}

module.exports = countCartProducts