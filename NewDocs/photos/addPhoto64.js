/**
 *
 * @api {POST} /photos/64 addPhoto64
 * @apiDescription Add a new photo
 * @apiGroup photos
 * @apiVersion  0.1.0
 * @apiPermission none
 *
 *
 * @apiParam (Body) {String} authorId The id of the author of this photo
 * @apiParam (Body) {String} title The title of the image
 * @apiParam (Body) {String} description The description given to the image
 * @apiParam (Body) {Date} [captureDate="Now"] The date that the photo was captured on
 * @apiParam (Body) {Date} [uploadDate="Now"] The date that the photo was uploaded on
 * @apiParam (Body) {Boolean} [isPublic=true] If this photo is public for anyone to see
 * @apiParam (Body) {String} secret The secret of this photo
 * @apiParam (Body) {Boolean} [favorites=false] If this photo is in the author's favourites
 * @apiParam (Body) {Object[]} [inPhoto] Array of user objects in the photo
 * @apiParam (Body) {Object[]} [tags] Array of tag objects in the photo
 * @apiParam (Body) {String} [cameraName] The name of the camera used
 * @apiParam (Body) {Number} width the width of the image
 * @apiParam (Body) {Number} height the height of the image
 * @apiParam (Body) {String} photo the photo in base64 format
 *
 *
 * @apiSuccess (Success 201) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *      "user" : "nhuefbh432",
 *      "title":"Blue Lake",
 *      "description":"A fantastic view on the lake",
 *      "captureDate":"2020-05-01T01:50:08",
 *      "uploadDate":"2021-12-01T19:11:08",
 *      "width":1920,
 *      "height":2000,
 *      "isPublic":true,
 *      "secret":"dfabhfu234",
 *      "photo":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4RD..."
 *      "favorites":false,
 *      "inPhoto":[{...},{...},...],
 *      "tags":[{...},{...},...],
 *      "cameraName":"Cannon 201cf"
 *  } 
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 Created
 * {
 *      "statusCode":201
 * }
 *
 *   @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 *
 */
