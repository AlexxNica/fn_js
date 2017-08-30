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
    define(['ApiClient', 'model/AppWrapper', 'model/AppsWrapper', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AppWrapper'), require('../model/AppsWrapper'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.OracleFunctions) {
      root.OracleFunctions = {};
    }
    root.OracleFunctions.AppsApi = factory(root.OracleFunctions.ApiClient, root.OracleFunctions.AppWrapper, root.OracleFunctions.AppsWrapper, root.OracleFunctions.Error);
  }
}(this, function(ApiClient, AppWrapper, AppsWrapper, Error) {
  'use strict';

  /**
   * Apps service.
   * @module api/AppsApi
   * @version 0.1.29
   */

  /**
   * Constructs a new AppsApi. 
   * @alias module:api/AppsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the appsAppDelete operation.
     * @callback module:api/AppsApi~appsAppDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an app.
     * Delete an app.
     * @param {String} app Name of the app.
     * @param {module:api/AppsApi~appsAppDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.appsAppDelete = function(app, callback) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppDelete");
      }


      var pathParams = {
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
        '/apps/{app}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppGet operation.
     * @callback module:api/AppsApi~appsAppGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information for a app.
     * This gives more details about a app, such as statistics.
     * @param {String} app name of the app.
     * @param {module:api/AppsApi~appsAppGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppWrapper}
     */
    this.appsAppGet = function(app, callback) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppGet");
      }


      var pathParams = {
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
      var returnType = AppWrapper;

      return this.apiClient.callApi(
        '/apps/{app}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppPatch operation.
     * @callback module:api/AppsApi~appsAppPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an app.
     * You can set app level settings here. 
     * @param {String} app name of the app.
     * @param {module:model/AppWrapper} body App to post.
     * @param {module:api/AppsApi~appsAppPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppWrapper}
     */
    this.appsAppPatch = function(app, body, callback) {
      var postBody = body;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppPatch");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling appsAppPatch");
      }


      var pathParams = {
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
      var returnType = AppWrapper;

      return this.apiClient.callApi(
        '/apps/{app}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsGet operation.
     * @callback module:api/AppsApi~appsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all app names.
     * Get a list of all the apps in the system.
     * @param {module:api/AppsApi~appsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppsWrapper}
     */
    this.appsGet = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = AppsWrapper;

      return this.apiClient.callApi(
        '/apps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsPost operation.
     * @callback module:api/AppsApi~appsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post new app
     * Insert a new app
     * @param {module:model/AppWrapper} body App to post.
     * @param {module:api/AppsApi~appsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppWrapper}
     */
    this.appsPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling appsPost");
      }


      var pathParams = {
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
      var returnType = AppWrapper;

      return this.apiClient.callApi(
        '/apps', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
