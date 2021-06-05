/**
 *
 * @api {GET} /albums/:albumId getAlbum
 * @apiDescription Get information about an album
 * @apiGroup albums
 * @apiVersion  0.1.0
 * @apiPermission none
 *
 *
 * @apiParam  {String} albumId The id of the album
 *
 * @apiSuccess (Success 200) {String} authorId The id of the author of this photo
 * @apiSuccess (Success 200) {String} title The title of the album
 * @apiSuccess (Success 200) {String} description The description given to the album
 * @apiSuccess (Success 200) {Object[]} photos Array of photos within the album
 * @apiSuccess (Success 200) {Date} updateDate The date that the album was updated
 * @apiSuccess (Success 200) {Date} createDate The date that the album was created
 * @apiSuccess (Success 200) {Number} countPhotos The Number of photos in the album
 * @apiSuccess (Success 200) {Number} statusCode the code of the request
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "authorId" : "asdgfyvwer32",
 *      "title":"My album",
 *      "description":"The album description",
 *      "updateDate":"2021-12-01T19:11:08",
 *      "createDate":"2020-05-01T01:50:08",
 *      "countPhotos":17,
 *      "statusCode":200,
 *      "photos":[{
 *              "title":"Waterfall",
 *              "uploadDate":"2021-12-01T19:11:08",
 *              "imagePath":"www.example.com/doasf",
 *              "isPublic":true,
 *              "description" :"This is the description",
 *              "views":123,
 *              "captureDate":"2020-05-01T01:50:08",
 *              "secret":"dfjio324",
 *              "photoId":"dsphnfio2"
 *              },{...},...]
 * }
 *
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "AlbumNotFound",
 *        "statusCode":404
 *     }
 *
 * @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 */