const jwt = require('jsonwebtoken');
const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '../../secret/', '.env') });

const ids = ['6092ea68326fa5101115dfad', '6092ea68326fa5101115dfae', '6092ea68326fa5101115dfaf', '6092ea68326fa5101115dfb0'];

for (let i = 0; i < ids.length; i++) {
  const id = ids[i];
  console.log(jwt.sign({ userId: id }, process.env.CONFIRMATION_KEY));
}
console.log('-----------------------------------');

for (let i = 0; i < ids.length; i++) {
  const id = ids[i];
  console.log(jwt.sign({ userId: id }, process.env.RESET_PASSWORD_KEY));
}
