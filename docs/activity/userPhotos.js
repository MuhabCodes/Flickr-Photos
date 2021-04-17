/**
 * 
 * @api {GET} /activity/user/photos userPhotos
 * @apiDescription Returns a list of recent activity on photos belonging to the calling user. Do not poll this method more than once an hour.
 * @apiGroup activity
 * @apiVersion  1.0.0
 * 
 * @apiParam  {String} [timeFrame] The timeframe in which to return updates for. This can be specified in days ('2d') or hours ('4h'). The  behavoir is to return changes since the beginning of the previous user session.
 * @apiParam  {String} [perPage=10] Number of items to return per page.The maximum allowed value is 50.
 * @apiParam  {String} [page=1] The page of results to return.
 * 
 * @apiSuccess (Success 200) {Object[]} activityPhotosList list of all recent photos activites of mentioned user
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
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
 * 
 * 
 */