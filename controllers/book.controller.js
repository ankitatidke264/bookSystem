const bookModel = require('../models/book.model')
const { validationResult } = require('express-validator');

const addBook = async (req, res) => {
    try {
        const result = validationResult(req);
        if (result.isEmpty()) {
            const data = req.body
            const book = await bookModel.create({...data})
            return res.json({message: "Book added successfully", data: book}).status(200)
        }else{
            res.send({ errors: result.array() }).status(500);
        }
    } catch (error) {
        return res.json({message: error.message}).status(404)
    }
}

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await bookModel.find({})
        return res.json({message: "All Book List", data: allBooks}).status(200)
    } catch (error) {
        return res.json({message: error.message}).status(404)
    }
}

const getBookById = async (req, res) => {
    try {
        const id = req.params.id
        const book = await bookModel.findOne({_id: id})
        return res.json({message: "Book Detail", data: book}).status(200)
    } catch (error) {
        return res.json({message: error.message}).status(404)
    }
}

const updateBookById = async (req, res) => {
    try {
        console.log("req", req.body)
        const result = validationResult(req);
        if (result.isEmpty()) {
            const id = req.body.id
            await bookModel.updateOne({_id: id},{...req.body})
            return res.json({message: "Book Updated Successfully"}).status(200)
        }else{
            res.send({ errors: result.array() }).status(500);
        }
    } catch (error) {
        return res.json({message: error.message}).status(404)
    }
}

const deleteBookById = async (req, res) => {
    try {
        console.log("req", req.body)
        const id = req.body.id
        await bookModel.deleteOne({_id: id})
        return res.json({message: "Book Deleted Successfully"}).status(200)
    } catch (error) {
        return res.json({message: error.message}).status(404)
    }
}

module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById
}