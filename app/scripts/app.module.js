(function() {

  'use strict';

  /**
   * @ngdoc overview
   * @name js2NotebookApp
   * @description
   * # js2NotebookApp
   *
   * Main module of the application.
   */
  angular.module('js2NotebookApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

}());
