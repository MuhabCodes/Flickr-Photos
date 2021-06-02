/**
 * 
 * @api {GET} /tags/hottags getHotList
 * @apiDescription Returns a list of hot tags for the given period.
 * @apiGroup tags
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} [period="day"] The period for which to fetch hot tags. Valid values are day and week.
 * @apiParam  {String} [count=20] The number of tags to return. Maximum allowed value is 200.
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} hotTagsList list of all hot tags required
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
   "period": "day",
   "count": "6",
   "tag": [
      {
         "score": "20",
         "tagText": "northerncalifornia"
      },
      {
         "score": "18",
         "tagText": "top20"
      },
      {
         "score": "15",
         "tagText": "keychain"
      },
      {
         "score": "10",
         "tagText": "zb"
      },
      {
         "score": "9",
         "tagText": "selfportraittuesday"
      },
      {
         "score": "4",
         "tagText": "jan06"
      }
   ]
}
 *     
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code.
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
 *       "error": "tagNotFound",
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