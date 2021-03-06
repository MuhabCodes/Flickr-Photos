/**
 *
 * @api {GET} /photos/:photoId/info getPhotoInfo
 * @apiDescription Get the information of a certain photo
 * @apiGroup photos
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} photoId The id of the photo to get information for.
 *
 *
 * @apiSuccess (Success 200) {String} authorId The id of the author of this photo
 * @apiSuccess (Success 200) {String} title The title of the image
 * @apiSuccess (Success 200) {String} description The description given to the image
 * @apiSuccess (Success 200) {Date} captureDate The date that the photo was captured on
 * @apiSuccess (Success 200) {Date} uploadDate The date that the photo was uploaded on
 * @apiSuccess (Success 200) {Boolean} isPublic If this photo is public for anyone to see
 * @apiSuccess (Success 200) {String} secret The secret number of this photo
 * @apiSuccess (Success 200) {Number} views The number of views on this photo
 * @apiSuccess (Success 200) {Boolean} favorites If this photo is in the author's favourites
 * @apiSuccess (Success 200) {Object[]} inPhoto Array of user objects in the photo
 * @apiSuccess (Success 200) {Object[]} tags Array of tag objects in the photo
 * @apiSuccess (Success 200) {String} cameraName The name of the camera used
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "authorId" : "fob43vb21",
 *      "title":"Blue Lake",
 *      "description":"A fantastic view on the lake",
 *      "captureDate":"2020-05-01T01:50:08",
 *      "uploadDate":"2021-12-01T19:11:08",
 *      "isPublic":true,
 *      "secret":"f929gvb4",
 *      "views":150,
 *      "favorites":false,
 *      "inPhoto":[{
 *          "username":"John Smith",
 *          "isPro":false,
 *          "email":"john@gmail.com",
 *          "userId":"dfih2345ub"
 *          },{...},...],
 *      "tags":[{...},{...},...],
 *      "cameraName":"Cannon 201cf",
 *      "statusCode":200
 *
 * }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
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
 *       "error": "Forbidden User",
 *        "statusCode":403
 *     }
 *
 *   @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 *
 *
 */