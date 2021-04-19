/**
 *
 * @api {GET} /groups/:groupId/topics getList
 * @apiDescription Get a list of discussion topics in a group.
 * @apiGroup groups-discuss-topics
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId The NSID or path alias of the group to add a topic to.
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} topics The topics that you requested
 * @apiError (Error 404) {String} error The group isn't found
 * @apiError (Error 404) {String} error No topics found
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *      "groupId":"jgbfib34"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200,
 *      "topics":[{
 *          "topicId":"ihbru23b4",
 *          "subject":"This is a subject",
 *          "dateCreated":"1-1-2020",
 *          "dateLastPost":"1-1-2021"
 *          },{...},...]
 * }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "GroupNotFound",
 *        "statusCode":404
 *     }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "NoTopicsFound",
 *        "statusCode":404
 *     }
 *
 *
 */
