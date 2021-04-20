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
 * @apiError (Error 404) {String} error photoId not found at our application
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "photoNotFound",
 *        "statusCode":404
 *     }
  
 * 
 */