/**
 * 
 * @api {GET} /places/:url/info getInfoByUrl
 * @apiDescription Lookup information about a place, by its flickr.com/places URL.
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} url A flickr.com/places URL in the form of /country/region/city. For example: /Canada/Quebec/Montreal
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} informationList list of all information about a place by url
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "placeNotFound",
 *        "statusCode":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * 
 * 
 * 
 */