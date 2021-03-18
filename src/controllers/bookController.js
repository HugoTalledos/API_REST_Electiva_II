const Topic = require("../models/Book");
const Book = require("../models/Book");

module.exports = {
  add: async (req, res) => {
    const { title, cover, description, author, gender, editorial } = req.body;
    const newBook = new Book({ title, cover, description, author, gender, editorial });
    try {
      let result = await newBook.save();
      res.status(200).json({ message: "Add book", result });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
    const book = await Book.findById(id);
    if (!(book.deleted === true)) return res.status(200).json(book);
    res.status(200).json({ message: `Book with id: ${id} - not found` })
    } catch (err) {
      res.status(500).json({ message: "Unexpected error", err});
    }
  },
  getAll: async (req, res) => {
    try {
      let books = await Book.find();
      res.status(200).json({ message: "Get all books", books });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const newBook = { ...req.body };
      await Book.findByIdAndUpdate(id, newBook);
      res.status(200).json({ message: "Book updated successfully", newBook });
    } catch (err) {
      res.status(500).json({ message: "Unexpected error", err});
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      let deletedBook = await Book.findByIdAndDelete(id);
      res.status(200).json({ message: "Delete book", deletedBook });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};
