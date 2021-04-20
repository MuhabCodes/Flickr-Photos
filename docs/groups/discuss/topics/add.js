/**
 *
 * @api {POST} /groups/:groupId/discuss/topics addTopics
 * @apiDescription Post a new discussion topic to a group.
 * @apiGroup groups-discuss-topics
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId The NSID or path alias of the group to add a topic to.
 * @apiParam  {String} subject The topic subject.
 * @apiParam  {String} message The topic message.
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code

 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "groupId" : "foabi432"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200
 * }
 *
 *
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "GroupNotFound",
 *        "statusCode":404
 *     }
 *  @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 */
