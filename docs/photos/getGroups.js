/**
 *
 * @api {GET} /photos/:photoId/groups getGroups
 * @apiDescription Returns all visible groups and groups the photo belongs to.
 * @apiGroup photos
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} photoId The photo to return information for.
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object[]} groups The groups that the photo belongs to
 * @apiError (Error 404) {String} error The photo doesn't exist
 * @apiError (Error 404) {String} error The photo doesn't belong to a group
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : "fdasbi32"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200,
 *      "groups":[{
 *          "groupId":"fhn934ub54",
 *          "name":"group name"
 *          },{...},...]
 * }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "statusCode":404
 *     }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "NoGroupFound",
 *        "statusCode":404
 *     }
 *
 *
 */
