/**
 * 
 * @api {get} /groups/search/:text search
 * 
 * @apiGroup groups
 * @apiVersion  0.1.0
 * @apiDescription Search for groups. 18+ groups will only be returned for authenticated calls where the authenticated user is over 18.
 * 
 * 
 * 
 * 
 * @apiParam  {String} text The text to search for.
 * @apiParam  {String} [perPage=100] Number of groups to return per page. The maximum allowed value is 500.
 * @apiParam  {String} [page=1] The page of results to return.
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} groups List of groups found (18+ groups will only be returned for authenticated calls where the authenticated user is over 18.) 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
  * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *
 *
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
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
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 * @apiErrorExample {json} Error-401
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 *
 * 
 * 
  *@apiSuccessExample {json} Success-Response:
*{
*   "page": "1",
*   "pages": "14",
*   "perPage": "5",
*   "total": "67",
*   "group": [
*      {
*         "id": "3000@N02",
*         "name": "Frito's Test Group",
*         "eighteenPlus": "0"
*      },
*      {
*         "id": "32825757@N00",
*         "name": "Free for All",
*         "eighteenPlus": "0"
*      },
*      {
*         "id": "33335981560@N01",
*         "name": "joly's mothers",
*         "eighteenPlus": "0"
*      },
*      {
*         "id": "33853651681@N01",
*         "name": "Wintermute tower",
*         "eighteenPlus": "0"
*      },
*      {
*         "id": "33853651696@N01",
*         "name": "Art and Literature Hoedown",
*         "eighteenPlus": "0"
*      }
*   ]
*}
*
*
* 
* 
*/