/**
 *
 * @api {GET} /groups/:groupId/discuss/topics/:topicId getInfo
 * @apiDescription Get information about a group discussion topic.
 * @apiGroup groups.discuss.topics
 * @apiVersion  0.0.1
 *
 *
 * @apiParam  {String} groupId The NSID or path alias of the group to add a topic to.
 * @apiParam  {String} topicId The ID for the topic
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object} topic The topic that you requested
 * @apiError (Error 404) {String} error The group isn't found
 * @apiError (Error 404) {String} error The topic isn't found
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "groupId" : "fhbu23b4",
 *      "topicId":"ohui9ew4"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200,
 *      "topic":{...}
 * }
 *
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "GroupNotFound",
 *        "statusCode":404
 *     }
 *
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "TopicNotFound",
 *        "statusCode":404
 *     }
 *
 *
 */
