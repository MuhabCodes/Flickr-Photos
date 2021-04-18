/**
 * 
 * @api {GET} /groups/pools/canPost getGroups
 * 
 * @apiGroup groups-pools
 * 
 * @apiVersion  0.1.0
 * 
 * @apiDescription Get the groups where you can post photos.
 * 
 * @apiParam  {Number} [page=1] The page of results to return.
 * @apiParam  {Number} [perPage=400] The number of groups per page that can be returned.
 * 
 * @apiSuccess (Success 200) {Object[]} groups A list containing the groups to which you can add photos and information about pagination.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *  
 * 
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiError (Error 500) {String} error The server The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Group Not Found",
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
 * @apiSuccessExample {json} Success-200:
 *    {
 *      "page": 1,
 *      "pages": 1,
 *      "perPage": 10,
 *      "total": 1,
 *      "groups": [
 *                  {
 *                      "id": "1gn13g@f2f",
 *                      "name": "Software Engineering",
 *                      "admin": 0,
 *                      "photoCount": 20
 *                  },
 *                  {
 *                      "id": "wfqw2r@f2f",
 *                      "name": "Spongebob Squarepants",
 *                      "admin": 1,
 *                      "photoCount": 0
 *                  }
 *      }
 * 
 */