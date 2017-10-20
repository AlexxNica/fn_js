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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FnJs);
  }
}(this, function(expect, FnJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FnJs.RoutesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RoutesApi', function() {
    describe('appsAppRoutesGet', function() {
      it('should call appsAppRoutesGet successfully', function(done) {
        //uncomment below and update the code to test appsAppRoutesGet
        //instance.appsAppRoutesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appsAppRoutesPost', function() {
      it('should call appsAppRoutesPost successfully', function(done) {
        //uncomment below and update the code to test appsAppRoutesPost
        //instance.appsAppRoutesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appsAppRoutesRouteDelete', function() {
      it('should call appsAppRoutesRouteDelete successfully', function(done) {
        //uncomment below and update the code to test appsAppRoutesRouteDelete
        //instance.appsAppRoutesRouteDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appsAppRoutesRouteGet', function() {
      it('should call appsAppRoutesRouteGet successfully', function(done) {
        //uncomment below and update the code to test appsAppRoutesRouteGet
        //instance.appsAppRoutesRouteGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appsAppRoutesRoutePatch', function() {
      it('should call appsAppRoutesRoutePatch successfully', function(done) {
        //uncomment below and update the code to test appsAppRoutesRoutePatch
        //instance.appsAppRoutesRoutePatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('appsAppRoutesRoutePut', function() {
      it('should call appsAppRoutesRoutePut successfully', function(done) {
        //uncomment below and update the code to test appsAppRoutesRoutePut
        //instance.appsAppRoutesRoutePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
