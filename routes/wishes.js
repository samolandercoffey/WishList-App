const express = require('express')
const router = express.Router()
//const todosController = require('../controllers/todos') 
const wishesController = require('../controllers/wishes')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, wishesController.getWishes)

router.post('/createWish', wishesController.createWish)

router.put('/markComplete', wishesController.markComplete)

router.put('/markIncomplete', wishesController.markIncomplete)

router.delete('/deleteWish', wishesController.deleteWish)

module.exports = router 