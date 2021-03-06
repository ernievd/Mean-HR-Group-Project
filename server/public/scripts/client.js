var hrApp = angular.module('hrApp', ['ngRoute']);

// app configuration
hrApp.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/add', {
            templateUrl: '/views/add.html',
            controller: 'AddController as vm'
        })
        .when('/track', {
            templateUrl: '/views/track.html',
            controller: 'TrackController as vm'
        })
        .when('/reports', {
            templateUrl: '/views/reports.html',
            controller: 'ReportsController as vm'
        })
        .otherwise(
            { redirectTo: '/reports' }
        );
    
});

