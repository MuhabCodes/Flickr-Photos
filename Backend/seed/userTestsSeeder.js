const mongoose = require('mongoose');
const User = require('../components/User/userModel');

const user = new User({
  _id: mongoose.Types.ObjectId('111111111111111111111111'),
  email: 'testing@gmail.com',
  password: '123456',
  username: 'testing',
});

mongoose
  .connect('mongodb+srv://ahmedehab:ahmedehab@cluster0.hyt1i.mongodb.net/ahmedehab?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
  // eslint-disable-next-line no-console
  .then(() => {
    console.log('MongoDB Connected');
    user.save((err, result) => {
      if (err) {
        console.log(err, 'seeding doesnt finish successfully');
      } else { console.log(result, 'seeding  finish successfully'); }
      mongoose.disconnect();
    });
  })
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));
