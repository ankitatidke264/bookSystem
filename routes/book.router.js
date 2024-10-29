var express = require('express');
var router = express.Router();
const bookController = require('../controllers/book.controller')
const bookValidator = require('../validators/book.validator')

router.post('/addBooking', bookValidator.addBookValidator,bookController.addBook);
router.get('/getAllBooks', bookController.getAllBooks);
router.get('/getBookById/:id', bookController.getBookById);
router.put('/updateBook', bookValidator.updateBookValidator,bookController.updateBookById);
router.delete('/deleteBook', bookController.deleteBookById);

module.exports = router;
