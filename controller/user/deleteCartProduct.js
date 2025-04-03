const addToCartModel = require("../../models/addToCartModel")

async function deleteCartProduct (req, res) {
    try {
        const product = req.body._id
        const deleteProduct = await addToCartModel.deleteOne({_id: product})
        
        res.json({
            success: true,
            error: false,
            message: "Product deleted from cart!",
            data: deleteProduct
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: true,
            message: err.message || err
        })
    }
}

module.exports = deleteCartProduct