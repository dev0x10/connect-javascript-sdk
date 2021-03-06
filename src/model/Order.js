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
var Money = require('./Money');
var OrderLineItem = require('./OrderLineItem');




/**
 * The Order model module.
 * @module model/Order
 * @version 2.5.5
 */

/**
 * Constructs a new <code>Order</code>.
 * Contains all information related to a single order to process with Square, including line items that specify the products to purchase
 * @alias module:model/Order
 * @class
 */
var exports = function() {
  var _this = this;








};

/**
 * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Order} obj Optional instance to populate.
 * @return {module:model/Order} The populated <code>Order</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
      if (data.hasOwnProperty('line_items')) {
      obj['line_items'] = ApiClient.convertToType(data['line_items'], [OrderLineItem]);
    }
      if (data.hasOwnProperty('total_money')) {
      obj['total_money'] = Money.constructFromObject(data['total_money']);
    }
      if (data.hasOwnProperty('total_tax_money')) {
      obj['total_tax_money'] = Money.constructFromObject(data['total_tax_money']);
    }
      if (data.hasOwnProperty('total_discount_money')) {
      obj['total_discount_money'] = Money.constructFromObject(data['total_discount_money']);
    }
    }
  return obj;
}

/**
 * The order's unique ID.  This value is only present for Order objects created by the Orders API through the [CreateOrder](#endpoint-createorder) endpoint.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The ID of the merchant location this order is associated with.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * A client specified identifier to associate an entity in another system with this order.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * The line items included in the order. Every order has at least one line item.
 * @member {Array.<module:model/OrderLineItem>} line_items
 */
exports.prototype['line_items'] = undefined;
/**
 * The total amount of money to collect for the order.
 * @member {module:model/Money} total_money
 */
exports.prototype['total_money'] = undefined;
/**
 * The total tax amount of money to collect for the order.
 * @member {module:model/Money} total_tax_money
 */
exports.prototype['total_tax_money'] = undefined;
/**
 * The total discount amount of money to collect for the order.
 * @member {module:model/Money} total_discount_money
 */
exports.prototype['total_discount_money'] = undefined;



module.exports = exports;



