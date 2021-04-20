/**
 * 
 * @api {get} /groups/:groupId/info getInfo
 * @apiGroup groups
 * @apiVersion  0.1.0
 * 
 * @apiDescription Get information about a group.
 * 
 * 
 * 
 * @apiParam  {String} groupId The Id of the group to fetch information for.
 * @apiParam  {String} [groupPathAlias] The path alias of the group. One of this or the groupId param is required
 * @apiParam  {String} [lang] The language of the group name and description to fetch. If the language is not found, the primary language of the group will be returned. Valid values are the same as in feeds.
 * 
 * 
 * @apiSuccess (Success 200) {Object} groupInfo Get information about a group.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
  * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} error Forbidden The server understood the request but refuses to authorize it.
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 408) {String} error RequestTimeout the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client.
 * @apiError (Error 408) {Number} statusCode The status code
 * 
 * @apiError (Error 411) {String} error Length required the server refuses to accept the request without a defined Content-Length header.
 * @apiError (Error 411) {Number} statusCode The status code 
 * 
 * @apiError (Error 417) {String} error Expectation Failed the expectation given in the request's Expect header could not be met.
 * @apiError (Error 417) {Number} statusCode The status code
 * 
 * @apiError (Error 429) {String} error Too Many Requests he user has sent too many requests in a given amount of time ("rate limiting").
 * @apiError (Error 429) {Number} statusCode The status code
 * 
 *
 * @apiError (Error 500) {String} error Internal Server Error the server encountered an unexpected condition that prevented it from fulfilling the request.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "groupNotFound",
 *        "statusCode":404
 *     }
 * 
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * 
 * 
 *@apiSuccessExample {json} Success-Response:
 * {
 *  "id": "34427465497@N01",
 *  "iconserver": "1",
 *  "iconfarm": "1",
 *  "lang": "en-us",
 *  "isPoolModerated": "0",
 *  "name": "GNEverybody",
 *  "description": "The group for GNE players",
 *  "members": "69",
 *  "privacy": "3",
 *  "throttle": {
 *     "count": "10",
 *     "mode": "month",
 *     "remaining": "3"
 *  },
 *  "restrictions": {
 *     "photosOk": "1",
 *     "videosOk": "1",
 *     "imagesOk": "1",
 *     "screensOk": "1",
 *     "artOk": "1",
 *     "safeOk": "1",
 *     "moderateOk": "0",
 *     "restrictedOk": "0",
 *     "hasGeo": "0"
 *  }
 *}
 * 
 * 
 */