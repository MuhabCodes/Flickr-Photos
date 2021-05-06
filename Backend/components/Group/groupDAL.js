const Group = require('./groupModel');

module.exports.findGroupById = async (id) => {
  const group = await Group.findById(id).exec();
  return group;
};
