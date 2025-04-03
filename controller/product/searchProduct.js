const productModel = require("../../models/productModel")

async function searchProduct (req, res) {
    try {
        const query = req?.query?.q
        
        if (query) {
            const regex = new RegExp(query, 'i', 'g')

            const product = await productModel.find({
            "$or" : [
                {productName: regex},
                {category: regex}
            ]
            })
            res.json({
                data: product,
                success: true,
                error: false
            })
        } else {
            res.json({
                data: [],
                success: true,
                error: false
            })
        }

    } catch(err) {
        res.json({
            success: false,
            error: true,
            message: err.message || err
        })
    }
}

module.exports = searchProduct