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
    define(['ApiClient', 'model/CallWrapper', 'model/CallsWrapper', 'model/Error', 'model/LogWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CallWrapper'), require('../model/CallsWrapper'), require('../model/Error'), require('../model/LogWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.FnJs) {
      root.FnJs = {};
    }
    root.FnJs.CallApi = factory(root.FnJs.ApiClient, root.FnJs.CallWrapper, root.FnJs.CallsWrapper, root.FnJs.Error, root.FnJs.LogWrapper);
  }
}(this, function(ApiClient, CallWrapper, CallsWrapper, Error, LogWrapper) {
  'use strict';

  /**
   * Call service.
   * @module api/CallApi
   * @version 0.2.1
   */

  /**
   * Constructs a new CallApi. 
   * @alias module:api/CallApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the appsAppCallsCallGet operation.
     * @callback module:api/CallApi~appsAppCallsCallGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CallWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get call information
     * Get call information
     * @param {String} app app name
     * @param {String} call Call ID.
     * @param {module:api/CallApi~appsAppCallsCallGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CallWrapper}
     */
    this.appsAppCallsCallGet = function(app, call, callback) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppCallsCallGet");
      }

      // verify the required parameter 'call' is set
      if (call === undefined || call === null) {
        throw new Error("Missing the required parameter 'call' when calling appsAppCallsCallGet");
      }


      var pathParams = {
        'app': app,
        'call': call
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CallWrapper;

      return this.apiClient.callApi(
        '/apps/{app}/calls/{call}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppCallsCallLogDelete operation.
     * @callback module:api/CallApi~appsAppCallsCallLogDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete call log entry
     * Delete call log entry
     * @param {String} call Call ID.
     * @param {String} app App name.
     * @param {module:api/CallApi~appsAppCallsCallLogDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.appsAppCallsCallLogDelete = function(call, app, callback) {
      var postBody = null;

      // verify the required parameter 'call' is set
      if (call === undefined || call === null) {
        throw new Error("Missing the required parameter 'call' when calling appsAppCallsCallLogDelete");
      }

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppCallsCallLogDelete");
      }


      var pathParams = {
        'call': call,
        'app': app
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/apps/{app}/calls/{call}/log', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppCallsCallLogGet operation.
     * @callback module:api/CallApi~appsAppCallsCallLogGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get call logs
     * Get call logs
     * @param {String} app App Name
     * @param {String} call Call ID.
     * @param {module:api/CallApi~appsAppCallsCallLogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogWrapper}
     */
    this.appsAppCallsCallLogGet = function(app, call, callback) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppCallsCallLogGet");
      }

      // verify the required parameter 'call' is set
      if (call === undefined || call === null) {
        throw new Error("Missing the required parameter 'call' when calling appsAppCallsCallLogGet");
      }


      var pathParams = {
        'app': app,
        'call': call
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LogWrapper;

      return this.apiClient.callApi(
        '/apps/{app}/calls/{call}/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppCallsGet operation.
     * @callback module:api/CallApi~appsAppCallsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CallsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get app-bound calls.
     * Get app-bound calls can filter to route-bound calls, results returned in created_at, descending order (newest first).
     * @param {String} app App name.
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Route path to match, exact.
     * @param {String} opts.cursor Cursor from previous response.next_cursor to begin results after, if any.
     * @param {Number} opts.perPage Number of results to return, defaults to 30. Max of 100.
     * @param {Number} opts.fromTime Unix timestamp in seconds, of call.created_at to begin the results at, default 0.
     * @param {Number} opts.toTime Unix timestamp in seconds, of call.created_at to end the results at, defaults to latest.
     * @param {module:api/CallApi~appsAppCallsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CallsWrapper}
     */
    this.appsAppCallsGet = function(app, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppCallsGet");
      }


      var pathParams = {
        'app': app
      };
      var queryParams = {
        'path': opts['path'],
        'cursor': opts['cursor'],
        'per_page': opts['perPage'],
        'from_time': opts['fromTime'],
        'to_time': opts['toTime']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CallsWrapper;

      return this.apiClient.callApi(
        '/apps/{app}/calls', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
