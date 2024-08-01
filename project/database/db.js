const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://hrushikesh:poojahegde@cluster0.i4uvepo.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));

