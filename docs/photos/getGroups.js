/**
 *
 * @api {GET} /photos/:photoId/getGroups GetGroups
 * @apiDescription Returns all visible groups and groups the photo belongs to.
 * @apiGroup Photos
 * @apiVersion  0.0.1
 *
 *
 * @apiParam  {Number} photoId The photo to return information for.
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object[]} groups The groups that the photo belongs to
 * @apiError (Error 404) {String} error The photo doesn't exist
 * @apiError (Error 404) {String} error The photo doesn't belong to a group
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : 8573
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200,
 *      "groups":[{...},{...},...]
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
