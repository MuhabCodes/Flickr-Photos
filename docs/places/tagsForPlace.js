/**
 * 
 * @api {get} /places/tagsForPlace title
 * @apiName places
 * @apiGroup places
 * @apiVersion  1.0.0
 * 
 * @apiDescription Return a list of the top 100 unique tags for a Flickr Places or Where on Earth (WOE) ID
 * 
 * 
 * @apiParam  {String} [woe_id] A Where on Earth identifier to use to filter photo clusters.(While optional, you must pass either a valid Places ID or a WOE ID.)
 * @apiParam  {String} [place_id] A Flickr Places identifier to use to filter photo clusters.(While optional, you must pass either a valid Places ID or a WOE ID.)
 * @apiParam  {String} [min_upload_date] Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date should be in the form of a unix timestamp.
 * @apiParam  {String} [max_upload_date] Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date should be in the form of a unix timestamp.
 * @apiParam  {String} [min_taken_date] Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date should be in the form of a mysql datetime.
 * @apiParam  {String} [max_taken_date] Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date should be in the form of a mysql datetime.
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} a list of the top 100 unique tags for a Flickr Places or Where on Earth
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
*@apiError (Error 400) {Number} statusCode The status code
 
 
@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "photoNotFound",
*        "statusCode":404
*     }
 
@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }

* 
 * 
 */