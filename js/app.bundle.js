webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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

	__webpack_require__(1);
	__webpack_require__(4);
	__webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const angular = __webpack_require__(2);
	const app = angular.module('RedMusic', ['ui.router', 'ngStorage']);


/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const angular = __webpack_require__(2);
	const app = angular.module('RedMusic', ['ui.router', 'ngStorage']);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const angular = __webpack_require__(2);
	const app = angular.module('RedMusic', ['ui.router', 'ngStorage']);

	app.controller('homeController', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./homeController\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	app.controller('bioController', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./bioController\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	app.controller('listenController', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./listenController\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	app.controller('shopController', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./shopController\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	app.controller('bookingController', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./bookingController\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	app.controller('calendarController', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./calendarController\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	app.controller('blogController', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./blogController\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	app.controller('paperdollController', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./paperdollController\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));


/***/ }
]);