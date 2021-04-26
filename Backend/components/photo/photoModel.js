const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
	description: String,
	captureDate: Date,
	uploadDate: Date,
	views: Number,
	secret: String,
	title: String,
	imageUrl: String,
	isPublic: Boolean,
	//add the user reference when it is completed
});

module.exports = mongoose.model('Photo', PhotoSchema);
