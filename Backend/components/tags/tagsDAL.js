const Tags = require('./tagsModel');

module.exports.createTag = async function createTag();

module.exports.getUserTag = async function getUserTag(userId)
{
    //get all tags where the creator of the tag is the userid
    const tagObj = await Tags.find({ownnerId : userId}); 
    return tagObj;
}