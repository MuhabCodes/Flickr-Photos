/**
 *
 * @api {DELETE} /albums/:albumId/photos/:photoId removePhoto
 * @apiDescription Remove a photo from a album.
 * @apiGroup albums
 * @apiVersion  0.1.0
 * @apiPermission author
 *
 *
 * @apiParam  {String} albumId The ID of the album to remove a photo from
 * @apiParam  {String} photoId The ID of the photo to remove from the album
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiError (Error 404) {Number} statusCode The status code of the request
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
 * @apiError (Error 403) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200
 * }
 *
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFoundInAlbum",
 *        "statusCode":404
 *     }
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "AlbumNotFound",
 *        "statusCode":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * @apiErrorExample {json} Error-403:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Forbidden",
 *        "statusCode":403
 *     }
 * @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 */