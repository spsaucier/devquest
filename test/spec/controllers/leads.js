'use strict';

describe('Controller: LeadsCtrl', function () {

  // load the controller's module
  beforeEach(module('devAssessmentApp'));

  var LeadsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeadsCtrl = $controller('LeadsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
