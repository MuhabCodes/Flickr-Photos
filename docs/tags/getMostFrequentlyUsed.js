/**
 * 
 * @api {GET} /tags/frequent getMostFrequentlyUsed
 * 
 *
 * @apiDescription Returns a list of most frequently used tags for a user.
 * @apiGroup tags
 * @apiVersion  0.1.0
 * 
 * 
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} frequentTags list of all frequently used tags 
 * {
   ,
   "who": {
      "userId": "1234",
      "tags": [
         {
            "count": "1",
            "tagText": "blah"
         },
         {
            "count": "5",
            "tagText": "publicdomain"
         }
      ]
   }
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