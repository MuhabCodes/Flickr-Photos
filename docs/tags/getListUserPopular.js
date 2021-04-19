/**
 * 
 * @api {GET} /tags/:userId/popular getListUserPopular
 * @apiDescription Get the popular tags for a given user (or the currently logged in user).
 * @apiGroup tags
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} [userId] ID of the user to fetch the tag list for
 * @apiParam  {String} [count=10] Number of popular tags to return
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} tagsList list of all popular tags of the mentioned user
 * 
 * @apiSuccessExample {json} Success-Response:
 *    {
   "userId": "1234",
   "tags": [
      {
         "count": "10",
         "tagText": "bar"
      },
      {
         "count": "11",
         "tagText": "foo"
      },
      {
         "count": "147",
         "tagText": "gull"
      },
      {
         "count": "3",
         "tagText": "tags"
      },
      {
         "count": "3",
         "tagText": "test"
      }
   ]
}
 * 
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
 */