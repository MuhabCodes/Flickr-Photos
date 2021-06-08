/**
 *
 * @api {GET} /photos/ getHome
 * @apiDescription Returns a list of the latest public photos uploaded to flickr by the followers.
 * @apiGroup photos
 * @apiVersion  0.1.1
 *
 * 
 *
 *
 * @apiSuccess (Success 200) {Object[]} photos The photos that have been recently uploaded by followers
 * 
 * 
 * @apiError (Error 401) {String} error The user is not known to the server.
 * @apiError (Error 401) {Number} statusCode The status code.
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *    
 *      "photos":[{
        "userName": "mhmd",
        "userAvatar": "https://i.imgur.com/PyVmvKL.jpg",
        "title": "photo 2",
        "faves": 0,
        "comments": 0,
        "isPro": false,
        "description": "Great pic",
        "ownerId": "6092ea68326fa5101115dfae",
        "photoId": "7092ea68326fa5101115dfea",
        "uploadDate": "2021-12-01T17:11:08.000Z",
        "photoUrl": "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg"
    },{...},...]
 * }
 *
 *  @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 *
 */