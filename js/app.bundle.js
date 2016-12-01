webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const app = angular.module('RedMusic', ['ui.router']);

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
	const app = angular.module('RedMusic', ['ui.router']);


/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const angular = __webpack_require__(2);
	const app = angular.module('RedMusic', ['ui.router']);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const angular = __webpack_require__(2);
	const app = angular.module('RedMusic', ['ui.router']);

	app.controller('homeController', __webpack_require__(6));
	app.controller('bioController', __webpack_require__(7));
	app.controller('listenController', __webpack_require__(8));
	app.controller('shopController', __webpack_require__(9));
	app.controller('bookingController', __webpack_require__(10));
	app.controller('calendarController', __webpack_require__(11));
	app.controller('blogController', __webpack_require__(12));
	app.controller('paperdollController', __webpack_require__(13));


/***/ },
/* 6 */
/***/ function(module, exports) {

	

/***/ },
/* 7 */
/***/ function(module, exports) {

	

/***/ },
/* 8 */
/***/ function(module, exports) {

	

/***/ },
/* 9 */
/***/ function(module, exports) {

	

/***/ },
/* 10 */
/***/ function(module, exports) {

	

/***/ },
/* 11 */
/***/ function(module, exports) {

	

/***/ },
/* 12 */
/***/ function(module, exports) {

	

/***/ },
/* 13 */
/***/ function(module, exports) {

	

/***/ }
]);