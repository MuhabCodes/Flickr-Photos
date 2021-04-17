/**
 * 
 * @api {GET} /photos/:photoId/geo/location getLocation
 * 
 * @apiGroup photos-geo
 * @apiVersion  1.0.0
 * 
 * @apiDescription Get the geo data (latitude and longitude and the accuracy level) for a photo.
 * 
 * @apiParam  {String} photoId The id of the photo you want to retrieve location data for.
 * @apiParam  {String} [extras] Extra flags.
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object} geoData the geo data (latitude and longitude and the accuracy level) for a photo.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 *  
@apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 
 
@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "photoNotFound",
*        "statusCode":404
*     }
 
@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }


 * 
 */