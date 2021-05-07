/**
 * 
 * @api {GET} /groups/:groupId/pools/photos getPhotos
 * @apiGroup groups-pools
 * @apiVersion  0.1.0
 * 
 * @apiDescription Get a list of pool photos for a given group.
 * 
 * @apiParam  {String} userId This filters the photos to only return photos by that user.
 * @apiParam  {String} [tag] A tag to filter the pool with.(maximum 1 tag)
 * @apiParam  {Number} [page=1] The page of results to return.
 * @apiParam  {Number} [perPage=100] The number of groups per page that can be returned.
 * 
 * @apiSuccess (Success 200) {Object[]} photos A list containing the photos from a given group and information for pagination.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code
 *
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
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
 *      "statusCode": 200,
 *      "photos": {
 *                      "page": 1,
 *                      "pages": 1,
 *                      "perPage": 10,
 *                      "total": 1,
 *                      "photoList": [
 *                                     {
 *                                       "id": "ag34imgd",
 *                                       "ownerId": "wfno1g3n",
 *                                       "title": "Paris",
 *                                       "ownerName": "Hamada",
 *                                       "dataCreated" "1089918707"
 *                                     }   
 *                                    ]
 *      }
 * 
 */