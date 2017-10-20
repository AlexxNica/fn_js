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
    instance = new FnJs.RouteWrapper();
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

  describe('RouteWrapper', function() {
    it('should create an instance of RouteWrapper', function() {
      // uncomment below and update the code to test RouteWrapper
      //var instane = new FnJs.RouteWrapper();
      //expect(instance).to.be.a(FnJs.RouteWrapper);
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new FnJs.RouteWrapper();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new FnJs.RouteWrapper();
      //expect(instance).to.be();
    });

    it('should have the property route (base name: "route")', function() {
      // uncomment below and update the code to test the property route
      //var instane = new FnJs.RouteWrapper();
      //expect(instance).to.be();
    });

  });

}));
