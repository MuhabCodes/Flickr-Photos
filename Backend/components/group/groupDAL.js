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
  console.log(groupObj);
  const group = await groupObj.save();
  return group;
};
