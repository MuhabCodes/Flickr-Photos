const { join } = require('path');
const app = require('../../bin/server');

jest.setTimeout(30000);

require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });

const tagsDAL = require('../../components/tags/tagsDAL');

const tagToFind = {
  tagId: '60b7be952c71e90dcc0f5062',
  tagRaw: 'adding a new tag',
  tagText: 'addinganewtag',
};
// seed db
const userWithTags = '6092ea68326fa5101115dfae';

const tagToCreate = {
  ownerId: userWithTags,
  tagRaw: 'testing to add a new tag',

};

test('should return tagObj with tagRaw ', async () => {
  const tagFound = await tagsDAL.getTag(tagToFind.tagRaw);
  expect(JSON.stringify(tagFound.tagRaw)).toEqual(JSON.stringify(tagToFind.tagRaw));
});

// TODO: in seeding add a tag called "adding a new tag"

test('should create a new tag in DB', async () => {
  const tagAdded = await tagsDAL.createTag(tagToCreate.ownerId, tagToCreate.tagRaw);

  expect(JSON.stringify(tagAdded.tagRaw)).toEqual(JSON.stringify(tagToCreate.tagRaw));
});

test('should return tags that was created by user', async () => {
  const tagsObj = await tagsDAL.getUserTag(userWithTags);
  expect(JSON.stringify(tagsObj[0].ownerId)).toEqual(JSON.stringify(userWithTags));
});

test('should return tag Object according to certain ID', async () => {
  const tagObj = await tagsDAL.getTagWithId(tagToFind.tagId);
  expect(JSON.stringify(tagObj._id)).toEqual(JSON.stringify(tagToFind.tagId));
});
