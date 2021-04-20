/**
 * 
 * @api {GET} /tags/:userId/raw getListUserRaw
 * @apiDescription Get the raw versions of a given tag (or all tags) for the currently logged-in user.
 * @apiGroup tags
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} [userId] ID of the user to fetch the tag list for
 * 
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} tagsList list of all raw versions of tags of the mentioned user
 * @apiSuccessExample {json} Success-Response:
 *    {
   "userId": "1234",
   "tags": {
      "tag": {
         "clean": "foo",
            "tagRaw": [
            "foo",
            "Foo",
            "f:oo"
         ]
      }
   }
}
 *   
 * 
 * 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "userNotFound",
 *        "statusCode":404
 *     }
 * 
 */