/**
 * 
 * @api {GET} /people/limit getLimits
 * @apiDescription Return limit of pixel and size for photos & size and duration for videos
 *
 * @apiGroup people
 * @apiVersion  0.1.0
 * 
 * 
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} limitList A list of photos and videos limits (video duration in seconds)
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccessExample {json} Success-Response:
 *    {
 *         "userId":"1234",
 *          "photos":{
 *                  "maxPixels":"1024",
 *                  "maxSize":"15728640"
 *                  },
 *          "videos": {
 *                      "maxDuration":"120",
 *                      "maxSize":"15728640"
 *                      }
 *         
 *    }
 * 
 * 
 * @apiError (Error 401) {String} error login failed.  
 * @apiError (Error 401) {Number} statusCode The status code.
 
 * @apiError (Error 403) {String} error The server understood the request but refuses to authorize it(you aren't logged in).
 * @apiError (Error 403) {Number} statusCode The status code
 
 * @apiError (Error 404) {String} error user not found at our application
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *  
 * 
 * 
 * 
 * 
 * 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "userNotFound",
 *        "statusCode":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }

 */