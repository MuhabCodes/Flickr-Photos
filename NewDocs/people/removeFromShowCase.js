/**
 * 
 * @api {DELETE} /people/:userId/showcase removeFromShowCase
 * @apiDescription remove a given photo from showCase
 * @apiGroup people
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} userId userId you will remove photo from his showCase
 * @apiHeader  {String} authorization authorization Value
 * @apiHeaderExample {json} Request-Example:
 *    {
 *        "Authorization": "dksjfbdsjkfbusafbjaadsf"
 *     } 
 * @apiParam  (body) {String} photoId Id of photo you want to add 
 * @apiParamExample  {string} Request-Example:
 *    {
 *        "photoId" : "5d6ede6a0ba62570afcedd3d"
 *     }
 * 
 *@apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccessExample {json} Success-Response:
 *{
    "message": "photo removed from showCase Successfully"
}
 * 
 * @apiError (Error 403) {String} error The client does not have access rights to the content;
 * @apiError (Error 404)  {Number} statusCode The status code.
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
 *       "error": "PhotoNotFound",
 *        "statusCode":404
 *     }
 * @apiErrorExample {json} Error-403:
 *     HTTP/1.1 403 Not Authorized
 *     {
 *       "message": "you arenot authorized" ,
 *        "statusCode":403
 *     }
 * @apiErrorExample {json} Error-403:
 *     HTTP/1.1 403 Not Authorized
 *     {
 *      "message": "showCase is Empty" ,
 *        "statusCode":403
 *     }

 * 
 * 
 */
