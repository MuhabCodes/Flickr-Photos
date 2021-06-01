/**
 * 
 * @api {GET} /tags/:userId getUserTags
 * @apiDescription Get the tag list for a given user (or the currently logged in user).
 * @apiGroup tags
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} [userId] ID of the user to fetch the tag list for
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} tagsList list of all tags of the mentioned user
 * @apiSuccessExample {json} Success-Response:
 *   [
    {
        "_id": "60b4db9cc53d5f5480ff0938",
        "ownerId": "6092ea68326fa5101115dfae",
        "tagRaw": "like 4 like",
        "tagText": "like4like",
        "__v": 0
    },
    {
        "_id": "60b4e19250f8f3668855dc3a",
        "ownerId": "6092ea68326fa5101115dfae",
        "tagRaw": "hi ho",
        "tagText": "hiho",
        "__v": 0
    },
    {
        "_id": "60b4e1e1fd5d0b4ac4fd07b4",
        "ownerId": "6092ea68326fa5101115dfae",
        "tagRaw": "sun is good",
        "tagText": "sunisgood",
        "__v": 0
    }
]
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
  

 */
