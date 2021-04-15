/**
 *
 * @api {POST} /galleries/:gallery_id Add a new photo to a gallery
 * @apiName addPhotoToGallery
 * @apiGroup Galleries
 * @apiVersion  0.0.1
 * @apiPermission author
 *
 *
 * @apiParam  {Number} gallery_id The id of the gallery
 * @apiParam  {Number} photo_id The id of the photo to be added
 * @apiParam  {String} token User authorization token
 *
 * @apiSuccess (Success 200) {Boolean} success The request is handled successfully
 * @apiSuccess (Success 200) {Number} status_code The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "gallery_id" : 1234,
 *      "photo_id":45,
 *      "token":"987gv324"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "success" : true,
 *     "status_code":200
 * }
 *
 *
 */
