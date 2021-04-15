/**
 * 
 * @api {GET} /tags/frequent getMostFrequentlyUsed
 * 
 *
 * @apiDescription Returns a list of most frequently used tags for a user.
 * @apiGroup tags
 * @apiVersion  1.0.0
 * 
 * 
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} frequentTags list of all frequently used tags 
 * 
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "tagNotFound",
 *        "status_code":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }
 * 
 */