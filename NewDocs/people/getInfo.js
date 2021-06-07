/**
 * 
 * @api {GET} /people/:userId/info getInfo
 * @apiDescription Get information about a user
 * @apiGroup people
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} userId userId you want to get information about
 * 
 * @apiSuccess (Success 200) {Object[]} userInfo The user information of the user you want info about
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *  
 * @apiSuccessExample {json} Success-Response:
 *{
    "userId": "6092ea68326fa5101115dfad",
    "followersCount": 0,
    "followingCount": 4,
    "followers": [],
    "following": [
        "6092ea68326fa5101115dfae",
        "6092ea68326fa5101115dfaf",
        "6092ea68326fa5101115dfb0",
        "111111111111111111111111"
    ],
    "isActivated": false,
    "isPro": false,
    "albums": [],
    "email": "hamoksha@live.com",
    "displayName": "keka",
    "photos": [
        {
            "views": 0,
            "isPublic": true,
            "tags": [],
            "inPhoto": [],
            "favs": 0,
            "comments": 0,
            "_id": "5d6ede6a0ba62570afcedd3d",
            "peopleInPhoto": [],
            "title": "hi",
            "uploadDate": "2021-05-01T12:16:11.000Z",
            "secret": "secret key",
            "imageUrl": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            "width": 1920,
            "height": 1195,
            "user": "6092ea68326fa5101115dfad",
            "__v": 0
        }
    ],
    "photosCount": 1,
    "person": {
        "dateCreated": "2021-06-06T20:17:04.917Z",
        "_id": "60bb2d70c77326753f3975dc",
        "realName": "Yousef Qadry",
        "city": "keka City",
        "homeTown": "Giza",
        "occupation": "student",
        "country": "Egypt",
        "description": "Hello mohamed amr afifi"
    },
    "tags": 0,
    "favs": 0,
    "userAvatar": "https://i.imgur.com/PyVmvKL.jpg",
    "firstName": "Yousef",
    "lastName": "Qadry",
    "urlCover": "https://i.imgur.com/EWN8anz.png",
    "showCase": [
        {
            "views": 0,
            "isPublic": true,
            "tags": [],
            "inPhoto": [],
            "favs": 0,
            "comments": 0,
            "_id": "5d6ede6a0ba62570afcedd3d",
            "peopleInPhoto": [],
            "title": "hi",
            "uploadDate": "2021-05-01T12:16:11.000Z",
            "secret": "secret key",
            "imageUrl": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            "width": 1920,
            "height": 1195,
            "user": "6092ea68326fa5101115dfad",
            "__v": 0
        }
    ]
}
 * 
 * 
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code.
 
 * 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code

 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "userNotFound",
 *        "statusCode":404
 *     }
  
 
 * 
 */
