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
    define(['ApiClient', 'model/Error', 'model/RouteWrapper', 'model/RoutesWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/RouteWrapper'), require('../model/RoutesWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.FnJs) {
      root.FnJs = {};
    }
    root.FnJs.RoutesApi = factory(root.FnJs.ApiClient, root.FnJs.Error, root.FnJs.RouteWrapper, root.FnJs.RoutesWrapper);
  }
}(this, function(ApiClient, Error, RouteWrapper, RoutesWrapper) {
  'use strict';

  /**
   * Routes service.
   * @module api/RoutesApi
   * @version 0.2.1
   */

  /**
   * Constructs a new RoutesApi. 
   * @alias module:api/RoutesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the appsAppRoutesGet operation.
     * @callback module:api/RoutesApi~appsAppRoutesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoutesWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get route list by app name.
     * This will list routes for a particular app, returned in alphabetical order.
     * @param {String} app Name of app for this set of routes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.image Route image to match, exact.
     * @param {String} opts.cursor Cursor from previous response.next_cursor to begin results after, if any.
     * @param {Number} opts.perPage Number of results to return, defaults to 30. Max of 100.
     * @param {module:api/RoutesApi~appsAppRoutesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoutesWrapper}
     */
    this.appsAppRoutesGet = function(app, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppRoutesGet");
      }


      var pathParams = {
        'app': app
      };
      var queryParams = {
        'image': opts['image'],
        'cursor': opts['cursor'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RoutesWrapper;

      return this.apiClient.callApi(
        '/apps/{app}/routes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppRoutesPost operation.
     * @callback module:api/RoutesApi~appsAppRoutesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RouteWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new Route
     * Create a new route in an app, if app doesn&#39;t exists, it creates the app. Post does not skip validation of zero values.
     * @param {String} app name of the app.
     * @param {module:model/RouteWrapper} body One route to post.
     * @param {module:api/RoutesApi~appsAppRoutesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RouteWrapper}
     */
    this.appsAppRoutesPost = function(app, body, callback) {
      var postBody = body;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppRoutesPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling appsAppRoutesPost");
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
      var returnType = RouteWrapper;

      return this.apiClient.callApi(
        '/apps/{app}/routes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppRoutesRouteDelete operation.
     * @callback module:api/RoutesApi~appsAppRoutesRouteDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the route
     * Deletes the route.
     * @param {String} app Name of app for this set of routes.
     * @param {String} route Route name
     * @param {module:api/RoutesApi~appsAppRoutesRouteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.appsAppRoutesRouteDelete = function(app, route, callback) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppRoutesRouteDelete");
      }

      // verify the required parameter 'route' is set
      if (route === undefined || route === null) {
        throw new Error("Missing the required parameter 'route' when calling appsAppRoutesRouteDelete");
      }


      var pathParams = {
        'app': app,
        'route': route
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
        '/apps/{app}/routes/{route}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppRoutesRouteGet operation.
     * @callback module:api/RoutesApi~appsAppRoutesRouteGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RouteWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets route by name
     * Gets a route by name.
     * @param {String} app Name of app for this set of routes.
     * @param {String} route Route name
     * @param {module:api/RoutesApi~appsAppRoutesRouteGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RouteWrapper}
     */
    this.appsAppRoutesRouteGet = function(app, route, callback) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppRoutesRouteGet");
      }

      // verify the required parameter 'route' is set
      if (route === undefined || route === null) {
        throw new Error("Missing the required parameter 'route' when calling appsAppRoutesRouteGet");
      }


      var pathParams = {
        'app': app,
        'route': route
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
      var returnType = RouteWrapper;

      return this.apiClient.callApi(
        '/apps/{app}/routes/{route}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppRoutesRoutePatch operation.
     * @callback module:api/RoutesApi~appsAppRoutesRoutePatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RouteWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Route, Fails if the route or app does not exist. Accepts partial updates / skips validation of zero values.
     * Update a route
     * @param {String} app name of the app.
     * @param {String} route route path.
     * @param {module:model/RouteWrapper} body One route to post.
     * @param {module:api/RoutesApi~appsAppRoutesRoutePatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RouteWrapper}
     */
    this.appsAppRoutesRoutePatch = function(app, route, body, callback) {
      var postBody = body;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppRoutesRoutePatch");
      }

      // verify the required parameter 'route' is set
      if (route === undefined || route === null) {
        throw new Error("Missing the required parameter 'route' when calling appsAppRoutesRoutePatch");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling appsAppRoutesRoutePatch");
      }


      var pathParams = {
        'app': app,
        'route': route
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
      var returnType = RouteWrapper;

      return this.apiClient.callApi(
        '/apps/{app}/routes/{route}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppRoutesRoutePut operation.
     * @callback module:api/RoutesApi~appsAppRoutesRoutePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RouteWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Route if it does not exist. Update if it does. Will also create app if it does not exist. Put does not skip validation of zero values
     * Update or Create a route
     * @param {String} app name of the app.
     * @param {String} route route path.
     * @param {module:model/RouteWrapper} body One route to post.
     * @param {module:api/RoutesApi~appsAppRoutesRoutePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RouteWrapper}
     */
    this.appsAppRoutesRoutePut = function(app, route, body, callback) {
      var postBody = body;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppRoutesRoutePut");
      }

      // verify the required parameter 'route' is set
      if (route === undefined || route === null) {
        throw new Error("Missing the required parameter 'route' when calling appsAppRoutesRoutePut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling appsAppRoutesRoutePut");
      }


      var pathParams = {
        'app': app,
        'route': route
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
      var returnType = RouteWrapper;

      return this.apiClient.callApi(
        '/apps/{app}/routes/{route}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
