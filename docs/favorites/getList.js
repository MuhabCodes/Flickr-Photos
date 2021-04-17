/**
 * 
 * @api {GET} /favorites/:userId getList
 * 
 * @apiGroup favorites
 * @apiVersion  0.1.0
 * @apiDescription Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.
 * 
 * 
 *
 * @apiParam  {String} userId The NSID of the user to fetch the favorites list for. If this argument is omitted, the favorites list for the calling user is returned.
 * @apiParam  {Date} [minFaveDate] Minimum date that a photo was favorited on. The date should be in the form of a unix timestamp.
 * @apiParam  {Date} [maxFaveDate] Maximum date that a photo was favorited on. The date should be in the form of a unix timestamp.
 * @apiParam  {Number} [perPage] Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
 * @apiParam  {Number} [page] The page of results to return. If this argument is omitted, it defaults to 1
 * 
 * @apiSuccess (Success 200) {Object[]} favoritesList List of all user favorites
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * 
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * 
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 *  
 * @apiErrorExample {json} Error-404
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "photoNotFound",
 *        "statusCode":404
 *     }
 * @apiErrorExample {json} Error-401
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 *
 * 
 * 
 * 
 */