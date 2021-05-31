/**
 *
 * @api {POST} /albums createAlbum
 * @apiDescription Create a new album
 * @apiGroup albums
 * @apiVersion  0.1.0
 * @apiPermission author
 *
 *
 * @apiParam (Body) {String} title The title of the album
 * @apiParam (Body) {String} [description] The description of the album
 * @apiParam (Body) {String} authorId The id of the author of the album
 * @apiParam (Body) {Object[]} photos the photos that are within the album
 * @apiParam (Body) {String} [updateDate] The update date of the album
 * @apiParam (Body) {String} [createDate] The created date of the album
 * 
 *
 *
 * @apiSuccess (Success 201) {Number} statusCode The status code
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code.
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "statusCode":201
 * }
 *
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "AlbumNotFound",
 *        "statusCode":404
 *     }
 *  @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 *
 *  @apiErrorExample {json} Error-403:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Forbidden",
 *        "statusCode":403
 *     }
 *
 * @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 *
 */