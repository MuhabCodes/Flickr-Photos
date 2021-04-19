/**
 *
 * @api {POST} /galleries createGallery
 * @apiDescription Create a new gallery
 * @apiGroup galleries
 * @apiVersion  0.1.0
 * @apiPermission author
 *
 *
 * @apiParam  {String} title The title of the gallery
 * @apiParam  {String} [description] The description of the gallery
 *
 *
 * @apiSuccess (Success 201) {Number} statusCode The status code
 * @apiError (Error 404) {String} error The gallery isn't found
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "title":"My Gallery",
 *      "description":"Newly added Gallery"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "statusCode":201
 * }
 *
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "GalleryNotFound",
 *        "statusCode":404
 *     }
 *
 */
