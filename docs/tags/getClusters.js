/**
 * 
 * @api {GET} /tags/:tag/clusters getClusters
 * @apiDescription Gives you a list of tag clusters for the given tag.
 * @apiGroup tags
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} tag The tag that this cluster belongs to
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} tagCluster list of tag clusters of the given tag
 * @apiSuccessExample {json} Success-Response:
 *  
 * {
   "source": "cows",
   "total": "2",
   "cluster": [
      {
         "total": "3",
         "tag": [
            "farm",
            "animals",
            "cattle"
         ]
      },
      {
         "total": "3",
         "tag": [
            "green",
            "landscape",
            "countryside"
         ]
      }
   ]
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
 *       "error": "tagClusterNotFound",
 *        "statusCode":404
 *     }
  
 *
 * 
 */