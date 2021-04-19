/**
 * 
 * @api {GET} /tags/:tag/related getRelated
 * 
 *
 * @apiDescription Returns a list of tags 'related' to the given tag, based on clustered usage analysis.
 * @apiGroup tags
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} tag The tag to fetch related tags for.
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} relatedTags list of all related tags of the mentioned tag
 * @apiSuccessExample {json} Success-Response:
 *    {
   "tagSource": "london",
   "tag": [
      "england",
      "thames",
      "tube",
      "bigben",
      "uk"
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