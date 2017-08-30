/**
 * IronFunctions
 * The open source serverless platform.
 *
 * OpenAPI spec version: 0.1.29
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OracleFunctions) {
      root.OracleFunctions = {};
    }
    root.OracleFunctions.App = factory(root.OracleFunctions.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The App model module.
   * @module model/App
   * @version 0.1.29
   */

  /**
   * Constructs a new <code>App</code>.
   * @alias module:model/App
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>App</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/App} obj Optional instance to populate.
   * @return {module:model/App} The populated <code>App</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('config')) {
        obj['config'] = ApiClient.convertToType(data['config'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * Name of this app. Must be different than the image name. Can ony contain alphanumeric, -, and _.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Application configuration
   * @member {Object.<String, String>} config
   */
  exports.prototype['config'] = undefined;



  return exports;
}));

