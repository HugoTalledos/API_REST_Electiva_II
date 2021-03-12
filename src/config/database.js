const mongoose = require("mongoose");
// const URI       =   'mongodb://localhost/library';
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@arcluster.lq5zy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
