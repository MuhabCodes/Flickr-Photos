/**
 * 
 * @api {GET} /places/types getPlaceTypes
 * @apiDescription Fetches a list of available place types for Flickr.
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * 
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} placeTypes list of all available place types 
 * @apiSuccessExample {json} Success-Response:
*    [
  {
     "placeTypeId": "8",
     "text": "city"
  },
  {
     "placeTypeId": "12",
     "text": "country"
  },
  {
     "placeTypeId": "29",
     "text": "continent"
  }
]
 * 

 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 500 server couldn't handle
 *     {
 *       "error": "serverCouldn'tHandle",
 *        "statusCode":500
 *     }
 * 
 * 
 * 
 */