/**
 *
 * @api {POST} /galleries Create a new gallery
 * @apiName CreateGallery
 * @apiGroup Galleries
 * @apiVersion  0.0.1
 * @apiPermission author
 *
 *
 * @apiParam  {String} token User authorization token
 * @apiParam  {String} title The title of the gallery
 * @apiParam  {String} description The description of the gallery
 *
 *
 * @apiSuccess (Success 201) {Boolean} success The request is handled successfully
 * @apiSuccess (Success 201) {Number} status_code The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "token" : "buysdbf239",
 *     "title":"My Gallery",
 *      "description":"Newly added Gallery"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "success" : true
 *      "status_code":201
 * }
 *
 *
 */
