/**
 * 
 * @api {GET} /cameras/brands getBrands
 * @apiDescription Returns all the brands of cameras that Flickr knows about.
 * @apiGroup cameras
 * @apiVersion  0.1.0
 * 
 * 
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} cameraBrands all brands of cameras that flicker knows
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *  
 * 
 * 
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "camerasOrBrandNotFound",
 *        "statusCode":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }

 * 
 */