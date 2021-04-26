const Photo = require('./photoModel');

module.exports = {
	async getPhotos(req, res, next) {
		//get all photos within the database
		let photos = await Photo.find({});
		res.send(photos);
	},
	async addPhoto(req, res, next) {
		try {
			await Photo.create(req.body.photo);
			res.send('Photo Added Successfully');
		} catch (err) {
			console.log(err);
		}
	},
	async showPhoto(req, res, next) {
		try {
			let photo = await Photo.findById(req.params.id);
			res.send(photo);
		} catch (err) {
			console.log(err);
		}
	},
	async editPhoto(req, res, next) {
		try {
			let photo = await Photo.findById(req.params.id);
			photo = req.body.photo;
			await photo.save();
			res.send(photo);
		} catch (err) {
			console.log(err);
		}
	},
	async deletePhoto(req, res, next) {
		let photo = await Photo.findById(req.params.id);
		await photo.remove();
		res.send('Photo removed successfully');
	},
};
