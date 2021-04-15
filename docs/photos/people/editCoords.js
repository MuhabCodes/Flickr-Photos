/**
 * 
 * @api {PUT} /photos/:photo_id/people/:user_id/coords editCoords
 * @apiGroup photos.people
 * @apiVersion  1.0.0
 * 
 * @apiDescription Edit the bounding box of an existing person on a photo.
 * 
 *  
 * @apiParam  {String} photo_id The id of the photo to add a person to.
 * @apiParam  {String} user_id The id of the user to add to the photo
 * @apiParam  {Number} [person_x] the left-most pixel co-ordinate of the box around the person
 * @apiParam  {Number} [person_y] the top-most pixel co-ordinate of the box around the person
 * @apiParam  {Number} [person_w] the width (in pixel) of the box around the person
 * @apiParam  {Number} [person_h] the height (in pixel)of the box around the person
 * 
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *@apiError (Error 400) {Number} statusCode The status code
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "photoNotFound",
 *        "status_code":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }
 */