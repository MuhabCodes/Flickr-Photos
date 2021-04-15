/**
 * 
 * @api {POST}  /photos/geo/setContext/photoId/:photoId/context/:context setContext
 * @apiName photos
 * @apiGroup photos.geo
 * @apiVersion  1.0.0
 * @apiDescription Indicate the state of a photo's geotagginess beyond latitude and longitude.
 * @apiDescription Note : photos passed to this method must already be geotagged (using the flickr.photos.geo.setLocation method).
 * 
 * 
 * 
 * @apiParam  {String} photoId The id of the photo to set context data for.
 * @apiParam  {String} context Context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to indicate that a photo was taken "indoors" or "outdoors".

The current list of context IDs is :

0, not defined.
1, indoors.
2, outdoors.
 * 

    * @apiSuccess (Success 200) {Number} statusCode The status code  
 * 
 * 
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
*        "status_code":404
*     }
 
@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "status_code":401
*     }

 * 
 * 
 
 * 
 */