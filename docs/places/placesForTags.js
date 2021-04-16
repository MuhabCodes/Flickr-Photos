/**
 * 
 * @api {get} /places/placesForTags placesForTags
 * @apiName places
 * @apiGroup places
 * @apiVersion  1.0.0
 * 
 * @apiDescription Return a list of the top 100 unique places clustered by a given placetype for set of tags or machine tags.
 * 
 * @apiParam  {String} [place_type_id] The numeric ID for a specific place type to cluster photos by.

Valid place type IDs are :
22: neighbourhood
7: locality
8: region
12: country
29: continent


 * @apiParam  {String} [place_type] A specific place type to cluster photos by.
(The "place_type" argument has been deprecated in favor of the "place_type_id" argument. It won't go away but it will not be added to new methods. A complete list of place type IDs is available using the flickr.places.getPlaceTypes method. (While optional, you must pass either a valid place type or place type ID.)
)

Valid place types are :
neighbourhood (and neighborhood)
locality
region
country
continent

(While optional, you must pass either a valid place type or place type ID.)


 * @apiParam  {String} [woe_id] TA Where on Earth identifier to use to filter photo clusters. For example all the photos clustered by locality in the United States (WOE ID 23424977).

(While optional, you must pass either a valid Places ID or a WOE ID.)

 * @apiParam  {String} [place_id] A Flickr Places identifier to use to filter photo clusters. For example all the photos clustered by locality in the United States (Place ID 4KO02SibApitvSBieQ).

(While optional, you must pass either a valid Places ID or a WOE ID.)

 * 
 * 
 * @apiParam  {String} [threshold] The minimum number of photos that a place type must have to be included. If the number of photos is lowered then the parent place type for that place will be used.

For example if you only have 3 photos taken in the locality of Montreal (WOE ID 3534) but your threshold is set to 5 then those photos will be "rolled up" and included instead with a place record for the region of Quebec (WOE ID 2344924).

 *@apiParam  {String} [tags] A comma-delimited list of tags. Photos with one or more of the tags listed will be returned.

(While optional, you must pass either a valid tag or machine_tag
 
 
 *@apiParam  {String} [tag_mode] Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.
 
 *@apiParam  {String} [machine_tags] Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties :
Find photos using the 'dc' namespace : "machine_tags" => "dc:"
Find photos with a title in the 'dc' namespace : "machine_tags" => "dc:title="
Find photos titled "mr. camera" in the 'dc' namespace : "machine_tags" => "dc:title=\"mr. camera\"
Find photos whose value is "mr. camera" : "machine_tags" => "*:*=\"mr. camera\""
Find photos that have a title, in any namespace : "machine_tags" => "*:title="
Find photos that have a title, in any namespace, whose value is "mr. camera" : "machine_tags" => "*:title=\"mr. camera\""
Find photos, in the 'dc' namespace whose value is "mr. camera" : "machine_tags" => "dc:*=\"mr. camera\""
Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. "AND" queries are limited to (16) machine tags. "OR" queries are limited to (8).

(While optional, you must pass either a valid tag or machine_tag)

 *@apiParam  {String} [machine_tag_mode] Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.

 * @apiParam  {String} [min_upload_date] Minimum upload date. Photos with an upload date less than or equal to this value will be returned. The date should be in the form of a unix timestamp.
 * @apiParam  {String} [max_upload_date] Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date should be in the form of a unix timestamp.
 * 
 * @apiParam  {String} [min_taken_date] Minimum taken date. Photos with an taken date less than or equal to this value will be returned. The date should be in the form of a mysql datetime.
 * * @apiParam  {String} [max_taken_date] Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date should be in the form of a mysql datetime.
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} a list of the top 100 unique places clustered by a given placetype for set of tags or machine tags.
 *@apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *
 *  
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
*@apiError (Error 400) {Number} statusCode The status code
 
 
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

 * 
 * 
 *  
 */