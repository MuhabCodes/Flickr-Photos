/**
 *
 * @api {GET} /search/photos searchPhotos
 * @apiDescription Searches the title and description of the image
 * @apiGroup search
 * @apiVersion  0.1.1
 *
 *
 * @apiParam  (Query) {String} searchWord The word used to search in the title & description.
 *
 *
 * @apiSuccess (Success 200) {String} title The id of the author of this photo
 * @apiSuccess (Success 200) {String} imagePath The title of the image
 * @apiSuccess (Success 200) {String} description The description given to the image
 * @apiSuccess (Success 200) {Number} favs The number of favorites on this photo
 * @apiSuccess (Success 200) {Number} comments The number of comments on this photo
 * @apiSuccess (Success 200) {String} user The display name of the user
 * @apiSuccess (Success 200) {String} photoId The Id of the photo
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 * "photosSearch": [{
 *      "title": "photo 1",
 *      "imagePath": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
 *      "description": "Great pic",
 *      "favs": 0,
 *      "comments": 0,
 *      "photoId": "7092ea68326fa5101115dfbe",
 *      "user": "Velvvvvvet Thunder"
 *  }]
 *}
 *
 *   @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 *
 *
 */