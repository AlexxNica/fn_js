/**
 * fn
 * The open source serverless platform.
 *
 * OpenAPI spec version: 0.2.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Call', 'model/ErrorBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Call'), require('./ErrorBody'));
  } else {
    // Browser globals (root is window)
    if (!root.FnJs) {
      root.FnJs = {};
    }
    root.FnJs.CallsWrapper = factory(root.FnJs.ApiClient, root.FnJs.Call, root.FnJs.ErrorBody);
  }
}(this, function(ApiClient, Call, ErrorBody) {
  'use strict';




  /**
   * The CallsWrapper model module.
   * @module model/CallsWrapper
   * @version 0.2.1
   */

  /**
   * Constructs a new <code>CallsWrapper</code>.
   * @alias module:model/CallsWrapper
   * @class
   * @param calls {Array.<module:model/Call>} 
   */
  var exports = function(calls) {
    var _this = this;


    _this['calls'] = calls;

  };

  /**
   * Constructs a <code>CallsWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallsWrapper} obj Optional instance to populate.
   * @return {module:model/CallsWrapper} The populated <code>CallsWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('next_cursor')) {
        obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
      }
      if (data.hasOwnProperty('calls')) {
        obj['calls'] = ApiClient.convertToType(data['calls'], [Call]);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ErrorBody.constructFromObject(data['error']);
      }
    }
    return obj;
  }

  /**
   * cursor to send with subsequent request to receive the next page, if non-empty
   * @member {String} next_cursor
   */
  exports.prototype['next_cursor'] = undefined;
  /**
   * @member {Array.<module:model/Call>} calls
   */
  exports.prototype['calls'] = undefined;
  /**
   * @member {module:model/ErrorBody} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


