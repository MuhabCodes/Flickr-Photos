/**
 * 
 * @api {GET} /places/placetypes/:placeTypeId getTopPlacesList
 * @apiDescription Return the top 100 most geotagged places for a day.
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * @apiParam  {String} placeTypeId The numeric ID for a specific place type to cluster photos by.
 *
 * Valid place type IDs are :
 * 
 * 22: neighbourhood
 * 
 * 7: locality
 * 
 * 8: region
 * 
 * 12: country
 * 
 * 29: continent
 * 
 * @apiParam  {String} [date="yesterday"] A valid date in YYYY-MM-DD format.
 * @apiParam  {String} [placeId] Limit your query to only those top places belonging to a specific Flickr Places identifier.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} geoPlacesTags list of top 100 geotagged places for a day.
 * @apiSuccessExample {json} Success-Response:
 *    {
   "total": "100",
   "dateStart": "1246320000",
   "dateStop": "1246406399",
   "place": {
      "placeId": "4KO02SibApitvSBieQ",
      
      "latitude": "48.890",
      "longitude": "-116.982",
      "placeUrl": "/United+States",
      "placeType": "country",
      "placeTypeId": "12",
      "photoCount": "23371",
      "text": "United States"
   }
}
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
 * 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "placeTypeNotFound",
 *        "statusCode":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * 
 * 
 * 
 */