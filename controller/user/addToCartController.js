const addToCartModel = require("../../models/addToCartModel")

async function addToCartController (req, res) {
    try{
        
        const {productId} = req?.body
        const user = req?.userId

        const isProductAvailable = await addToCartModel.findOne({productId})

        if (isProductAvailable){
            return res.json({
                success: false,
                error: true,
                message: "Product already in Cart"
            })
        } else {
            
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: user
        }

        const newCartProduct = new addToCartModel(payload)
        const saveProduct = await newCartProduct.save()

        return res.json({
            success: true,
            error: false,
            data: saveProduct,
            message: "Dropped in Cart!"
        })
    } catch (err){
        res.status(400).json({
            success: false,
            error: true,
            message: err.message | err
        })
    }
}

module.exports = addToCartController