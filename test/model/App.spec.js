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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OracleFunctions);
  }
}(this, function(expect, OracleFunctions) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OracleFunctions.App();
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

  describe('App', function() {
    it('should create an instance of App', function() {
      // uncomment below and update the code to test App
      //var instane = new OracleFunctions.App();
      //expect(instance).to.be.a(OracleFunctions.App);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new OracleFunctions.App();
      //expect(instance).to.be();
    });

    it('should have the property config (base name: "config")', function() {
      // uncomment below and update the code to test the property config
      //var instane = new OracleFunctions.App();
      //expect(instance).to.be();
    });

  });

}));
