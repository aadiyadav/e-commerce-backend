const productModel = require("../../models/productModel")

const getProductsController = async (req, res) => {
    try {
        const allProducts = await productModel.find().sort({createdAt : -1})

        res.json({
            message: "There you go :)",
            success: true,
            error: false,
            data: allProducts
        })
    } catch(err) {
        res.status(400).json({
            message: err.message || err,
            success: false,
            error: true
        })
    }
}

module.exports = getProductsController