const productModel = require("../../models/productModel")

async function getProductDetails (req, res) {
    try{
        const {productId} = req.body
        const product = await productModel.findById(productId)

        res.json({
            data: product,
            success: true,
            error: false
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: true,
            message: err.message | err
        })
    }
}

module.exports = getProductDetails