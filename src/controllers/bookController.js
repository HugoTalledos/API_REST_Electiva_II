const Topic = require("../models/Book");

module.exports = {
  add: async (req, res) => {
    //   const { title, description, father='root', deleted=false } = req.body;
    const { body } = req;
    res.json({ message: "Add book", body });
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
    res.json({ message: "Get all book" });
  },
  update: async (req, res) => {
    const { body } = req;
    res.json({ message: "Update book", body });
  },
};
