/**
 * 
 *@api {GET} /photos/comments/getRecentForContacts getRecentForContacts

* @apiGroup photos-comments
* @apiVersion  0.1.0
* 
* 
*
* @apiParam  {Date} [dateLastComment] Limits the resultset to photos that have been commented on since this date. The date should be in the form of a Unix timestamp.
* @apiParam  {Number} [perPage] Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
* @apiParam  {Number} [page] The page of results to return. If this argument is omitted, it defaults to 1.
*@apiDescription Return the list of photos belonging to your contacts that have been commented on recently.
*@apiSuccess (Success 200) {Object[]}  recentsList List of photos favorited by your contacts 
*@apiSuccess (Success 200) {Number} statusCode The status code
*@apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
*@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code
*@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "commentNotFound",
*        "statusCode":404
*     }
*@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }
@apiSuccessExample {json} Success-Response:
*    {
   "page": "2",
   "pages": "89",
   "perPage": "10",
   "total": "881",
   "photo": [
      {
         "photoId": "2636",
         "ownerId": "47058503995@N01",
         "secret": "a123456",
         "server": "2",
         "title": "test_04",
         "isPublic": "1",
         "isFriend": "0",
         "isFamily": "0"
      },
      {
         "photoId": "2635",
         "ownerId": "47058503995@N01",
         "secret": "b123456",
         "server": "2",
         "title": "test_03",
         "isPublic": "0",
         "isFriend": "1",
         "isFamily": "1"
      },
      {
         "photoId": "2633",
         "ownerId": "47058503995@N01",
         "secret": "c123456",
         "server": "2",
         "title": "test_01",
         "isPublic": "1",
         "isFriend": "0",
         "isFamily": "0"
      },
      {
         "photoId": "2610",
         "ownerId": "12037949754@N01",
         "secret": "d123456",
         "server": "2",
         "title": "00_tall",
         "isPublic": "1",
         "isFriend": "0",
         "isFamily": "0"
      }
   ]
}
 * 
 * 
 */