const Topic = require("../models/Book");
const Book = require("../models/Book");

module.exports = {
  add: async (req, res) => {
    //   const { title, description, father='root', deleted=false } = req.body;
    const { title, description, author, gender, editorual } = req.body;
    const newBook = new Book({ title, description, author, gender, editorual });
    try {
      let result = await newBook.save();
      res.status(200).json({ message: "Add book", result });
    } catch (error) {
      res.status(400).json({ error });
    }
    // const date_added = Date(Date.now()).toString();
    // const topic = new Topic({title, description, date_added, father, deleted});
    // await topic.save();
    // return res.send({success: '200'});
  },
  getById: async (req, res) => {
    const { id } = req.params;
    res.json({ message: "Get by id book", id });

    // const topic = await Topic.findById(req.params.id);
    // if (!(topic.delete === true))
    //   return res.send({ success: "200", response: topic });
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
    const { body } = req;
    res.json({ message: "Update book", body });
  },
  delete: async (req, res) => {
    const { id } = req.query;
    try {
      let deletedBook = await Book.findByIdAndDelete(id);
      res.status(200).json({ message: "Delete book", deletedBook });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};
