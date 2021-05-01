const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
	description: {
		type: String,
	},
	captureDate: {
		type: Date,
	},
	uploadDate: {
		type: Date,
		required: true,
	},
	views: {
		type: Number,
		default: 0,
	},
	secret: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	isPublic: {
		type: Boolean,
		default: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	gallery: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Gallery',
		required: true,
	},
	tags: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Comment',
	},
	width: {
		type: Number,
		required: true,
	},
	height: {
		type: Number,
		required: true,
	},

	//add the user reference when it is completed
});

module.exports = mongoose.model('Photo', PhotoSchema);
