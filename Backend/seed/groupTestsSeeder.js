const mongoose = require('mongoose');
const Group = require('../components/Group/groupModel');

const group = new Group({
  _id: mongoose.Types.ObjectId('111111111111111111111111'),
  name: 'testing',
});

mongoose
  .connect('mongodb+srv://ahmedehab:ahmedehab@cluster0.hyt1i.mongodb.net/ahmedehab?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
  // eslint-disable-next-line no-console
  .then(() => {
    console.log('MongoDB Connected');
    group.save((err, result) => {
      if (err) {
        console.log(err, 'seeding doesnt finish successfully');
      } else { console.log(result, 'seeding  finish successfully'); }
    });
    mongoose.disconnect();
  })
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));
