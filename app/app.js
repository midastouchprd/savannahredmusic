const app = angular.module('RedMusic', ['ui.router', 'ngStorage']);

app.config(function($stateProvider) {
    const homeState = {
        name: 'home',
        url: '/',
        templateUrl: '../partials/home.html',
        controller: 'homeController'
    }

    const bioState = {
        name: 'bio',
        url: '/bio',
        templateUrl: '../partials/bio.html',
        controller: 'bioController'
    }

    const listenState = {
        name: 'listen',
        url: '/listen',
        templateUrl: '../partials/listen.html',
        controller: 'listenController'
    }

    const shopState = {
        name: 'shop',
        url: '/shop',
        templateUrl: '../partials/shop.html',
        controller: 'shopController'
    }

    const bookingState = {
        name: 'booking',
        url: '/booking',
        templateUrl: '../partials/booking.html',
        controller: 'bookingController'
    }

    const calendarState = {
        name: 'calendar',
        url: '/calendar',
        templateUrl: '../partials/calendar.html',
        controller: 'calendarController'
    }

    const blogState = {
        name: 'blog',
        url: '/blog',
        templateUrl: '../partials/blog.html',
        controller: 'blogController'
    }

    const paperdollState = {
        name: 'paperdoll',
        url: '/paperdoll',
        templateUrl: '../partials/paperdoll.html',
        controller: 'paperdollController'
    }


    $stateProvider.state(homeState);
    $stateProvider.state(bioState);
    $stateProvider.state(listenState);
    $stateProvider.state(shopState);
    $stateProvider.state(bookingState);
    $stateProvider.state(calendarState);
    $stateProvider.state(blogState);
    $stateProvider.state(paperdollState);

});

require('./directives');
require('./services');
require('./controllers');
