const express = require('express')
const router = express.Router()

const userSignInController = require('../controller/user/userSignIn')
const userLogInController = require('../controller/user/userLogin')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUserRole = require('../controller/user/updateUserRole')
const uploadProductController = require('../controller/product/uploadProduct')
const getProductsController = require('../controller/product/getProducts')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProductOne = require('../controller/product/getCategoryProductOne')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCartController')
const countCartProducts = require('../controller/user/countCartProducts')
const viewCart = require('../controller/user/viewCart')
const updateCartController = require('../controller/user/updateCartController')
const deleteCartProduct = require('../controller/user/deleteCartProduct')
const searchProduct = require('../controller/product/searchProduct')


router.post('/signin', userSignInController)
router.post('/login', userLogInController)
router.get('/user-details', authToken, userDetailsController)
router.get('/logout', userLogout)

router.get('/all-user', authToken, allUsers)
router.post('/update-user', authToken, updateUserRole)

router.post('/addToCart', authToken, addToCartController)
router.get('/countCart', authToken, countCartProducts)
router.get('/getCart', authToken, viewCart)
router.post('/updateCart', authToken, updateCartController)
router.post('/deleteProduct', authToken, deleteCartProduct)


router.post('/upload-product', authToken, uploadProductController)
router.get('/get-products', getProductsController)
router.post('/update-product', authToken, updateProductController)
router.get('/get-categoryProduct', getCategoryProductOne)
router.post('/category-product', getCategoryWiseProduct)
router.post('/product-details', getProductDetails)
router.get('/searchProduct', searchProduct)


module.exports = router