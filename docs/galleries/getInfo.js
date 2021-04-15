/**
 *
 * @api {GET} /galleries/:gallery_id Get information about a gallery
 * @apiName GetInfo
 * @apiGroup Galleries
 * @apiVersion  0.0.1
 * @apiPermission none
 *
 *
 * @apiParam  {Number} gallery_id The id of the gallery
 *
 * @apiSuccess (Success 200) {Number} author_id The id of the author of this photo
 * @apiSuccess (Success 200) {Number} photo_id The id of the primary photo
 * @apiSuccess (Success 200) {Boolean} success The request is handled successfully
 * @apiSuccess (Success 200) {String} title The title of the gallery
 * @apiSuccess (Success 200) {String} description The description given to the gallery
 * @apiSuccess (Success 200) {Date} update_date The date that the gallery was updated
 * @apiSuccess (Success 200) {Date} create_date The date that the gallery was created
 * @apiSuccess (Success 200) {Number} count_photos The Number of photos in the gallery
 * @apiSuccess (Success 200) {String} photo_secret The secret of the primary photo
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "gallery_id" : 12
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "author_id" : 13,
 *      "photo_id":15,
 *      "success":true,
 *      "title":"My Gallery",
 *      "description":"The gallery description",
 *      "update_date":"1-1-2010",
 *      "create_date":"1-1-2009",
 *      "count_photos":17,
 *      "photo_secret":"fu9g9233"
 * }
 *
 *
 */
