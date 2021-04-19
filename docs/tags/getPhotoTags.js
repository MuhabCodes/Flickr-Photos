/**
 * 
 * @api {GET} /tags/:photoId getPhotoTags
 * @apiDescription Get the tag list for a given photo
 * @apiGroup tags
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} photoId The id of the photo to return tags for
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} tagsList list of all tags of the mentioned photo
 * @apiSuccessExample {json} Success-Response:
 *    {
 * "tags": 
 * {
   "photoId": "2619",
   "tagsList": [
      {
         "photoId": "156",
         "author": "12037949754@N01",
         "authorName": "Bees",
         "tagRaw": "tag 1",
         "tagText": "tag1"
      },
      {
         "photoId": "157",
         "author": "12037949754@N01",
         "authorName": "Bees",
         "tagRaw": "tag 2",
         "tagText": "tag2"
      }
   ]
}
 *    }
 * 
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "photoNotFound",
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