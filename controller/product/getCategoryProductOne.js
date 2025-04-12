const productModel = require("../../models/productModel")

const getCategoryProduct = async (req, res) => {
    try{        
        const products = await productModel.find();

        const productByCategory = products.reduce((acc, product) => {
            const category = product.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(product);
            return acc;
        }, {});


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