/**
 *
 * @api {GET} /galleries/:gallery_id Return the list of photos for a gallery
 * @apiName GetPhotos
 * @apiGroup Galleries
 * @apiVersion 1.0.0
 * @apiPermission none
 *
 *
 * @apiParam  {Number} gallery_id The id of the gallery
 *
 * @apiSuccess (Success 200) {Boolean} success The request is handled successfully
 * @apiSuccess (Success 200) {Number} status_code The status_code
 * @apiSuccess (Success 200) {Object[]} photos Array of photos within the gallery
 *
 * @apiParamExample  {type} Request-Example:
 * {
 *     "gallery_id" : 13
 * }
 *
 *
 * @apiSuccessExample {type} Success-Response:
 * {
 *     "success" : true,
 *      "status_code":200,
 *      "photos":[{...},{...},...]
 * }
 *
 *
 */
