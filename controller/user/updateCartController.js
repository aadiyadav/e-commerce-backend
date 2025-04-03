const addToCartModel = require("../../models/addToCartModel")

async function updateCartController (req, res) {
    try {
        const product = req.body._id
        const qty = req.body.quantity
        
        const updateProduct = await addToCartModel.updateOne({_id: product}, {
            ...(qty && {quantity: qty})
        })
        res.json({
            message: "Cart updated!",
            success: true,
            error: false,
            data: updateProduct
        })
    } catch(err) {
        res.status(400).json({
            success: false,
            error: true,
            message: err.message || err
        })
    }
}

module.exports = updateCartController