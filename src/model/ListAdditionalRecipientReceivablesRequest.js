/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The ListAdditionalRecipientReceivablesRequest model module.
 * @module model/ListAdditionalRecipientReceivablesRequest
 * @version 2.5.5
 */

/**
 * Constructs a new <code>ListAdditionalRecipientReceivablesRequest</code>.
 * Defines the query parameters that can be included in a request to the [ListAdditionalRecipientReceivables](#endpoint-listadditionalrecipientreceivables) endpoint.
 * @alias module:model/ListAdditionalRecipientReceivablesRequest
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>ListAdditionalRecipientReceivablesRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListAdditionalRecipientReceivablesRequest} obj Optional instance to populate.
 * @return {module:model/ListAdditionalRecipientReceivablesRequest} The populated <code>ListAdditionalRecipientReceivablesRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('begin_time')) {
      obj['begin_time'] = ApiClient.convertToType(data['begin_time'], 'String');
    }
      if (data.hasOwnProperty('end_time')) {
      obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
    }
      if (data.hasOwnProperty('sort_order')) {
      obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'String');
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year.
 * @member {String} begin_time
 */
exports.prototype['begin_time'] = undefined;
/**
 * The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time.
 * @member {String} end_time
 */
exports.prototype['end_time'] = undefined;
/**
 * The order in which results are listed in the response (`ASC` for oldest first, `DESC` for newest first).  Default value: `DESC`
 * @member {module:model/ListAdditionalRecipientReceivablesRequest.SortOrderEnum} sort_order
 */
exports.prototype['sort_order'] = undefined;
/**
 * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;


  /**
   * Allowed values for the <code>sort_order</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SortOrderEnum = {
    /**
     * value: "DESC"
     * @const
     */
    "DESC": "DESC",
    /**
     * value: "ASC"
     * @const
     */
    "ASC": "ASC"  };


module.exports = exports;



