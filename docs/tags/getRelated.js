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
   "tags": [
      "england",
      "thames",
      "tube",
      "bigben",
      "uk"
   ]
}
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
 *       "error": "tagNotFound",
 *        "statusCode":404
 *     }
  
 * 
 */