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
 *        "statusCode":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }

 */