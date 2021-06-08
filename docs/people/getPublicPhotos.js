/**
 * 
 * @api {GET} /people/:userId/photos/public getPublicPhotos
 * 
 * @apiGroup people
 * @apiDescription Get a list of public photos for the given user.
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} userId ID of user you want to get public photos for
 * @apiParam  {String} [safeSearch] Safe search setting:
1 for safe.
2 for moderate.
3 for restricted.


 * @apiParam  {String} [extras] A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: description, license, dateUpload, dateTaken, ownerName, iconServer, originalFormat, lastUpdate, geo, tags, machineTags, oDims, views, media, pathAlias, urlSq, urlT, urlS, urlQ, urlM, urlN, urlZ, urlC, urlL, urlO
 * @apiParam  {String} [perPage=100] Number of photos to return per page. The maximum allowed value is 500.
 * @apiParam  {String} [page=1] The page of results to return.
 * 
 * 
 * @apiSuccess (Success 200) {Object[]}  userPhotos all public photos of the mentioned user 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 * {
   "page": "2",
   "pages": "15",
   "perPage": "10",
   "total": "150",
   "photo": [
      {
         "photoId": "2636",
         "ownerId": "1234",
         "secret": "a123456",
         
         "title": "test_04",
         "isPublic": "1",
         "isFriend": "0",
         "isFamily": "0"
      },
      {
         "photoId": "2637",
         "ownerId": "1234",
         "secret": "b123456",
         
         "title": "tress",
         "isPublic": "1",
         "isFriend": "0",
         "isFamily": "0"
      },
      {
        "photoId": "2638",
         "ownerId": "1234",
         "secret": "c123456",
         
         "title": "clouds",
         "isPublic": "0",
         "isFriend": "1",
         "isFamily": "1"
      },
      {
         "photoId": "2639",
         "ownerId": "5678",
         "secret": "d123456",
         
         "title": "test_07",
         "isPublic": "1",
         "isFriend": "0",
         "isFamily": "0"
      }
   ]
}
 * 
 * 
 *  
 * 
 * 
 * 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code

 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound",
 *        "statusCode":404
 *     }

 * 
 * 
 */