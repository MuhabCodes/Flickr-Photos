/**
 * 
 * @api {GET} /people/limit getLimits
 * @apiDescription Return limit of pixel and size for photos & size and duration for videos
 *
 * @apiGroup people
 * @apiVersion  1.0.0
 * 
 * 
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} limitList photos and videos limits
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * 
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
 *       "error": "limitNotFound",
 *        "status_code":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }

 */