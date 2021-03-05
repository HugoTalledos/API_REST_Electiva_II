const express = require('express');
const router = express.Router();

const Topic = require('../models/book');

router.post('/add', async (req, res) => {
    const { title, description, father='root', deleted=false } = req.body;
    const date_added = Date(Date.now()).toString();
    const topic = new Topic({title, description, date_added, father, deleted});
    await topic.save();
    return res.send({success: '200'});
});

router.get('/allTopics', async (req, res) => {
   const topics = await Topic.find();
   res.send({success: '200', response: topics});
});

router.get('/:id', async (req, res) => {
    const topic = await Topic.findById(req.params.id);
    if(!(topic.delete === true)) return res.send({success: '200', response: topic});
})

// router.get('/edit', async (req, res) => {
//     const { title, description, date_added, father }= req.body;
//     const newTopic =  { title, description, date_added, father, deleted:false };
//     await Topic.findByIdAndUpdate(req.params.id, newTopic);
//     res.json({status: 'success'});
// });

router.post('/delete', async (req, res) => {
    const { _id: id, title, description, date_added, father }= req.body;
    const newTopic =  { title, description, date_added, father, deleted: true };
    await Topic.findByIdAndUpdate(id, newTopic);
    res.send({success: '200'});
});


// router.delete('/:id', async (req, res) => {
//     await Topic.findByIdAndRemove(req.params.id);
//     res.json({status: 'delete'});
// })

module.exports = router;