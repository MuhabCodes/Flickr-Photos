/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const { mongoose } = require('mongoose');
const { join } = require('path');
const Person = require('../components/person/personModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

mongoose
  .connect(process.env.MONGO_URI_CLOUD,
    { useNewUrlParser: true });
const persons = [new Person({
  _id: '507f191e810c19729de86034',
  age: 17,
  realName: 'ahmed',

  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street t',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86035',
  age: 17,
  realName: 'mohamed',

  description: 'hi this is me',
  homeTown: 'dokki',
  occupation: 'street tji',
  city: 'Giza',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86036',
  age: 17,
  realName: 'ahmed',

  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street t',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86037',
  age: 17,
  realName: 'ahmed',

  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street t',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86038',
  age: 17,
  realName: 'ahmed',

  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street t',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86039',
  age: 17,
  realName: 'ahmed',

  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street it',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86040',
  age: 17,
  realName: 'ahmed',

  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street l',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86041',
  age: 17,
  realName: 'ahmed',

  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street l',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86042',
  age: 17,
  realName: 'ahmed',

  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street l',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86043',
  age: 17,
  realName: 'ahmed',

  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street y',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86044',
  age: 17,
  realName: 'ahmed',

  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street k',
  city: 'Cairo',
  country: 'Egypt',

}),
];
let done = 0;
for (let i = 0; i < persons.length; i++) {
  persons[i].save();
  done++;
  if (done === persons.length) {
    exit();
  }
}
exit();
{ mongoose.disconnect(); }
