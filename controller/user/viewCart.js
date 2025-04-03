const addToCartModel = require("../../models/addToCartModel")

async function viewCart (req, res) {
    try {
        const user = req.userId

        const allProducts = await addToCartModel.find({userId: user}).populate("productId")

        res.json({
            data: allProducts,
            success: true,
            error: false
        })

    } catch(err) {
        res.json({
            success: false,
            error: true,
            message: err.message | err
        })
    }
}

module.exports = viewCart