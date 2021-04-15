/**
 * 
 * @api {GET} /places/:placeTypeId getTopPlacesList
 * @apiDescription Return the top 100 most geotagged places for a day.
 * @apiGroup places
 * @apiVersion  1.0.0
 * 
 * @apiParam  {String} placeTypeId The numeric ID for a specific place type to cluster photos by.

Valid place type IDs are :
22: neighbourhood
7: locality
8: region
12: country
29: continent
 * @apiParam  {String} [date] A valid date in YYYY-MM-DD format. The default is yesterday.
 * @apiParam  {String} [placeId] Limit your query to only those top places belonging to a specific Flickr Places identifier.
 * @apiParam  {String} [woeId] Limit your query to only those top places belonging to a specific Where on Earth (WOE) identifier.
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} geoPlacesTags list of top 100 geotagged places for a day.
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "placeTypeNotFound",
 *        "status_code":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }
 * 
 * 
 * 
 */