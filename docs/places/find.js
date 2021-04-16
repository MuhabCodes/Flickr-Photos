/**
 * 
 * @api {get} /places/query/:query find
 * @apiName places
 * @apiGroup places
 * @apiVersion  1.0.0
 * 
 * 
 * @apiDescription Return a list of place IDs for a query string.

The flickr.places.find method is not a geocoder. It will round up to the nearest place type to which place IDs apply. For example, if you pass it a street level address it will return the city that contains the address rather than the street, or building, itself.
 * 
 * 
 * @apiParam  {String} query The query string to use for place ID lookups
 * 
 * @apiSuccess (Success 200) {Object[]} placeIds Return a list of place IDs
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * 
 * 
 * 
 *  
 
@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
*@apiError (Error 400) {Number} statusCode The status code
 
 
@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "invalidQuery",
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