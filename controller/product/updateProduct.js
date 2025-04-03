const uploadPermission = require("../../helpers/permission")
const productModel = require("../../models/productModel")

async function updateProductController(req, res) {
    try {
        if (!uploadPermission(req.userId)){
            throw new Error("Permission Denied")
        }

        const {_id, ...resBody} = req.body

        const updateProduct = await productModel.findByIdAndUpdate(_id, resBody)
        res.status(201).json({
            message: "Product updated.",
            data: updateProduct,
            success: true,
            error: false
        })

    } catch(err) {
        res.status(400).json({
            message: err.message || err,
            success: false,
            error: true
        })
    }
}

module.exports = updateProductController