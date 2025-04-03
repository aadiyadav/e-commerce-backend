const uploadPermission = require("../../helpers/permission")
const productModel = require("../../models/productModel")

async function uploadProductController(req, res) {
    try{
        const sessionUserId = req.userId

        if (!uploadPermission(sessionUserId)){
            throw new Error("Permission denied")
        }
        
        const uploadProduct = new productModel(req.body)
        const saveProduct = await uploadProduct.save()
        res.status(201).json({
            message: "Product uploaded successfully!",
            error: false,
            success: true,
            data: saveProduct
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            success: false,
            error: true,
        })
    }
}

module.exports = uploadProductController