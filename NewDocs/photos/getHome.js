/**
 *
 * @api {GET} /photos/home getHome
 * @apiDescription Returns a list of the latest public photos uploaded to flickr by the followers.
 * @apiGroup photos
 * @apiVersion  0.1.0
 *
 * 
 * @apiParam (Body) {String[]} userIds the ids of the followers
 * @apiParam (Body) {Number} page the number of the page retrived begins from 0
 *
 *

 * @apiSuccess (Success 200) {Object[]} photos The photos that have been recently uploaded by followers
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *    
 *      "photos":[{
 *              "title":"Waterfall",
 *              "uploadDate":"2020-05-01T01:50:08",
 *              "imagePath":"www.example.com/doasf",
 *              "isPublic":true,
 *              "description" :"This is the description",
 *              "views":123,
 *              "captureDate":"2021-12-01T19:11:08",
 *              "secret":"dfjio324",
 *              "photoId":"dsphnfio2",
 *              "user":"17489yhfgbv8vbc83"
 *              },{...},...]
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