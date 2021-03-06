/**
 * 
 * @api {POST} /person/:userId/info updateInfo
 * @apiDescription update Info for a given user
 * @apiGroup person
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam (body) {String} city city of the user
 * @apiParam (body) {String} homeTown homeTown of the user
 * @apiParam (body) {String} occupation occupation of the user
 * @apiParam (body) {String} country country of the user
 * @apiParam (body) {String} description description of the user
 * 
 * @apiHeader  {String} authorization authorization Value
 * @apiHeaderExample {json} Request-Example:
 *    {
 *        "Authorization": "dksjfbdsjkfbusafbjaadsf"
 *     }
 * 
 * @apiSuccess (Success 200) {Object} message message claiming that you added description successfully
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiParamExample  {string} Request-Example:
 * {
 *      "city": "keka City",
        "homeTown": "Giza",
        "occupation": "student",
        "country": "Egypt",
        "description" : "Hello world!"  
 * }
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     "message" : "data updated successfully"
 * }
 * 
 * 
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
 * 
 * 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "userNotFound",
 *        "statusCode":404
 *     }
 * @apiErrorExample {json} Error-403:
 *     HTTP/1.1 403 Not Authorized
 *     {
 *       "message": "You are not authorized to update info",
 *        "statusCode":403
 *     }
 */
