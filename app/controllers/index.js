'use strict';

const angular = require('angular');
const app = angular.module('RedMusic', ['ui.router']);

app.controller('homeController', require('./homeController'));
app.controller('bioController', require('./bioController'));
app.controller('listenController', require('./listenController'));
app.controller('shopController', require('./shopController'));
app.controller('bookingController', require('./bookingController'));
app.controller('calendarController', require('./calendarController'));
app.controller('blogController', require('./blogController'));
app.controller('paperdollController', require('./paperdollController'));
