const productModel = require("../../models/productModel")

const getCategoryProduct = async (req, res) => {
    try{
        const productCategories = await productModel.distinct("category")

        const productByCategoryPromises = productCategories.map(async (category) => {
            return await productModel.findOne({ category })
        });

        const productByCategory = await Promise.all(productByCategoryPromises)

        res.status(200).json({
            data: productByCategory,
            success: true,
            error: false
        })

    }catch(err){
        res.status(400).json({
            success: false,
            error: true,
            message: err.message || err
        })
    }
}

module.exports = getCategoryProduct