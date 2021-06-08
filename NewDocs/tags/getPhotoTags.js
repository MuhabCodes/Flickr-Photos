/**
 * 
 * @api {GET} /tags/photo/:photoId getPhotoTags
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
{
    "tags": {
        "photoId": "5d6ede6a0ba62570afcedd3d",
        "tagsList": [
            {
                "_id": "60b4db9cc53d5f5480ff0938",
                "ownerId": "6092ea68326fa5101115dfae",
                "tagRaw": "ElKekaHowaElBaba",
                "tagText": "ElKekaHowaElBaba",
                "__v": 0
            }
        ]
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
 *       "error": "photoNotFound",
 *        "statusCode":404
 *     }
  
 * 
 */
