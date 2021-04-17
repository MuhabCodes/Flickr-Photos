/**
 *
 * @api {POST} /groups/:groupId/discuss/topics AddTopics
 * @apiDescription Post a new discussion topic to a group.
 * @apiGroup groups.discuss.topics
 * @apiVersion  0.0.1
 *
 *
 * @apiParam  {String} groupId The NSID or path alias of the group to add a topic to.
 * @apiParam  {String} subject The topic subject.
 * @apiParam  {String} message The topic message.
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiError (Error 404) {String} error The group isn't found
 * @apiError (Error 404) {Number} statusCode The status code
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
 *
 */
