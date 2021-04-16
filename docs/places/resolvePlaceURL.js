/**
 * 
  * @api {get} /places/resolvePlaceURL/url/:url resolvePlaceURL
 * @apiName places
 * @apiGroup places
 * @apiVersion  1.0.0
 * 
 * @apiDescription Find Flickr Places information by Place URL.
This method has been deprecated. It won't be removed but you should use flickr.places.getInfoByUrl instead
 * 
 * @apiParam  {String} url A Flickr Places url (Flickr Place URLs are of the form /country/region/city)
 * 
 *@apiSuccess (Success 200) {Object} Places information
 *@apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * 

*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
*@apiError (Error 400) {Number} statusCode The status code
 
 
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
 * 
 */