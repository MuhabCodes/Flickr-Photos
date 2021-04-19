/**
 * 
 * @api {GET} /favorites/photos/:photoId/user/:userId getContext
 * 
 * @apiGroup favorites
 * @apiVersion  0.1.0
 * @apiDescription Returns next and previous favorites for a photo in a user's favorites.
 * 

 * @apiParam  {String} photoId The id of the photo to fetch the context for
 * @apiParam  {String} userId The user who counts the photo as favorite
 *
* @apiSuccess (Success 200) {Object[]} photos Photos Returned to user
*@apiSuccess (Success 200) {Number} statusCode The status code

*@apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 
 
*@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
*@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "photoNotFound",
*        "statusCode":404
*     }
*@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }
* @apiSuccessExample {json} Success-Response:
{
   
   "count": "3",
   "prevphoto": {
      "photoId": "2980",
      "secret": "973da1e709",
      "title": "boo!",
      "url": "/photos/bees/2980/"
   },
   "nextphoto": {
      "photoId": "2985",
      "secret": "059b664012",
      "title": "Amsterdam Amstel",
      "url": "/photos/bees/2985/"
   }
}

*
*
*
* 
*
* 
* 
* 
* 
* 
* 
*/