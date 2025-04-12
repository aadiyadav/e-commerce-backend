const productModel = require("../../models/productModel")

async function getCategoryWiseProduct (req, res){
    try{
        const {category} = req.body
        const product = await productModel.find({category})

        res.status(200).json({
            success: true,
            error: false,
            data: product
        })

    } catch (err){
        res.status(400).json({
            success: false,
            error: true,
            message: err.message | err
        })
    }
}

module.exports = getCategoryWiseProduct