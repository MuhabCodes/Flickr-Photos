/**
 * 
 * @api {GET} /people/:userId/photos/public getPublicPhotos
 * 
 * @apiGroup people
 * @apiDescription Get a list of public photos for the given user.
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} userId ID of user you want to get public photos for
 * @apiParam  {String} [safeSearch] Safe search setting:
1 for safe.
2 for moderate.
3 for restricted.


 * @apiParam  {String} [extras] A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: description, license, dateUpload, dateTaken, ownerName, iconServer, originalFormat, lastUpdate, geo, tags, machineTags, oDims, views, media, pathAlias, urlSq, urlT, urlS, urlQ, urlM, urlN, urlZ, urlC, urlL, urlO
 * @apiParam  {String} [perPage=100] Number of photos to return per page. The maximum allowed value is 500.
 * @apiParam  {String} [page=1] The page of results to return.
 * 
 * 
 * @apiSuccess (Success 200) {Object[]}  userPhotos all public photos of the mentioned user 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 * [
    {
        "views": 0,
        "isPublic": true,
        "tags": [],
        "inPhoto": [],
        "_id": "5d6ede6a0ba62570afcedd3d",
        "peopleInPhoto": [],
        "title": "hi",
        "uploadDate": "2021-05-01T12:16:11.000Z",
        "secret": "secret key",
        "imageUrl": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        "width": 1920,
        "height": 1195,
        "user": "6092ea68326fa5101115dfae",
        "__v": 0
    },
    {
        "views": 0,
        "isPublic": true,
        "tags": [],
        "inPhoto": [],
        "_id": "7092ea68326fa5101115dfbe",
        "peopleInPhoto": [],
        "description": "Great pic",
        "captureDate": "2020-01-01T06:11:08.000Z",
        "uploadDate": "2021-01-01T07:11:08.000Z",
        "secret": "secret key",
        "title": "photo 1",
        "imageUrl": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        "width": 1920,
        "height": 1195,
        "user": "6092ea68326fa5101115dfae",
        "__v": 0
    },
    {
        "views": 0,
        "isPublic": true,
        "tags": [],
        "inPhoto": [],
        "_id": "7092ea68326fa5101115dfea",
        "peopleInPhoto": [],
        "description": "Great pic",
        "captureDate": "2020-04-30T23:50:08.000Z",
        "uploadDate": "2021-12-01T17:11:08.000Z",
        "secret": "secret key",
        "title": "photo 2",
        "imageUrl": "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg",
        "width": 3456,
        "height": 2304,
        "user": "6092ea68326fa5101115dfae",
        "__v": 0
    },
    {
        "views": 0,
        "isPublic": true,
        "tags": [],
        "inPhoto": [],
        "_id": "7092ea68326fa5101115dfee",
        "peopleInPhoto": [],
        "description": "Great pic",
        "captureDate": "2021-01-01T06:11:08.000Z",
        "uploadDate": "2021-05-01T12:16:11.000Z",
        "secret": "secret key",
        "title": "photo 3",
        "imageUrl": "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_1280.jpg",
        "width": 2201,
        "height": 1240,
        "user": "6092ea68326fa5101115dfae",
        "__v": 0
    }
]
 * 
 * 
 *  
 * 
 * 
 * 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code

 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound",
 *        "statusCode":404
 *     }

 * 
 * 
 */
