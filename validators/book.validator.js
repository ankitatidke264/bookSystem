const { validationResult, body } = require('express-validator');

const addBookValidator = [
    body('bookName').notEmpty().withMessage("Book Name is required"),
    body('author').notEmpty().withMessage("Author Name is required"),
    body('title').notEmpty().withMessage("Title is required")
]

const updateBookValidator = [
    body('id').notEmpty().withMessage("Book Id required").isMongoId().withMessage("Book Id Invalid")

]

module.exports = {
    addBookValidator,
    updateBookValidator
}