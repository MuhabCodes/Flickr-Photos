/**
 * 
 * @api {PUT} /photos/:photoId editPhoto
 * @apiDescription Edit a certain photo based on the id
 * @apiGroup photos
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} photoId The id of the photo to get information for.
 * 
 * @apiParam (Body) {String} authorId The id of the author of this photo
 * @apiParam (Body) {String} title The title of the image
 * @apiParam (Body) {String} description The description given to the image
 * @apiParam (Body) {Date} captureDate The date that the photo was captured on
 * @apiParam (Body) {Date} uploadDate The date that the photo was uploaded on
 * @apiParam (Body) {Boolean} isPublic If this photo is public for anyone to see
 * @apiParam (Body) {String} secret The secret number of this photo
 * @apiParam (Body) {String} imageUrl The secret number of this photo
 * @apiParam (Body) {Number} views The number of views on this photo
 * @apiParam (Body) {Boolean} favorites If this photo is in the author's favourites
 * @apiParam (Body) {Object[]} inPhoto Array of user objects in the photo
 * @apiParam (Body) {Object[]} tags Array of tag objects in the photo
 * @apiParam (Body) {String} cameraName The name of the camera used
 * @apiParam (Body) {Number} statusCode The status code
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200
 * }
 * 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "statusCode":404
 *     }
 * 
 * 
 */