angular.module('gymScheduler', ['ui.router', '720kb.datepicker'])
  .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: '/app/components/clienthome/home.html'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
