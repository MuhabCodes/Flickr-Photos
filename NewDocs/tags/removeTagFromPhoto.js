 /** 
 * @api {DELETE} /tags/photo/:photoId removeTagFromPhoto
 * @apiDescription remove Tag from a photo
 * @apiGroup tags
 * @apiVersion  0.1.0
 * 
 * 
 * 
 * @apiHeader  {String} authorization authorization Value
 * @apiHeaderExample {json} Request-Example:
 *    {
 *        "Authorization": "Bearer   dksjfbdsjkfbusafbjaadsf"
 *     } 
 * @apiParam  {String} photoId photoId to remove the tag from
 * @apiParam  {String} tagId Id of the tag you want to remove
 * @apiParamExample  {string} Request-Example:
 *    {
 *        "tagId": "687475890289889340832ID"
 *     }
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     message: "Tag removed from photo successfully"
 * }
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
 *       "error": "tagOrPhotoNotFound",
 *        "statusCode":404
 *     }
 * * @apiErrorExample {json} Error-403:
 *     HTTP/1.1 403 Not Authorized
 *     {
 *       "message": "you arenot authorized to remove tag",
 *        "statusCode":403
 *     }
 */
