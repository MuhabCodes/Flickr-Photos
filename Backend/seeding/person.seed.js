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
  birthDate: '12-12-2000',
  realName: 'ahmed',
  dateCreated: '12-12-2007',
  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street t',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86035',
  birthDate: '12-04-2000',
  realName: 'mohamed',
  dateCreated: '12-12-2004',
  description: 'hi this is me',
  homeTown: 'dokki',
  occupation: 'street tji',
  city: 'Giza',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86036',
  birthDate: '12-12-2001',
  realName: 'ahmed',
  dateCreated: '12-11-2007',
  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street t',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86037',
  birthDate: '12-10-2002',
  realName: 'ahmed',
  dateCreated: '12-12-2007',
  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street t',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86038',
  birthDate: '12-09-2003',
  realName: 'ahmed',
  dateCreated: '12-12-2007',
  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street t',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86039',
  birthDate: '12-08-2004',
  realName: 'ahmed',
  dateCreated: '12-12-2007',
  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street it',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86040',
  birthDate: '12-07-2005',
  realName: 'ahmed',
  dateCreated: '12-12-2007',
  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street l',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86041',
  birthDate: '12-06-2006',
  realName: 'ahmed',
  dateCreated: '12-12-2007',
  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street l',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86042',
  birthDate: '12-03-2007',
  realName: 'ahmed',
  dateCreated: '12-12-2007',
  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street l',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86043',
  birthDate: '12-03-2008',
  realName: 'ahmed',
  dateCreated: '12-02-2007',
  description: 'this is me',
  homeTown: 'maadi',
  occupation: 'street y',
  city: 'Cairo',
  country: 'Egypt',

}),
new Person({
  _id: '507f191e810c19729de86044',
  birthDate: '12-12-2009',
  realName: 'ahmed',
  dateCreated: '12-02-2007',
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
