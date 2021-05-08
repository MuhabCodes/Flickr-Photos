const Group = require('./groupModel');

module.exports.createGroup = async function createGroup({
  name, ownerId, isPublic, plusEighteen, requiresInvitation,
}) {
  const groupObj = new Group({
    name,
    ownerId,
    isPublic,
    plusEighteen,
    requiresInvitation,
  });
  const group = await groupObj.save();
  return group;
};
module.exports.getAllGroup = async function getAllGroup() {
  const group = await Group.find();
  return group;
};

module.exports.findGroupById = async (id) => {
  const group = await Group.findById(id).exec();
  return group;
};