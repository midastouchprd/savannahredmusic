'use strict';

homeController.$inject = ['$scope, $http'];
function DashboardController(gh) {
    var _this = this;
    _this.github = '';
    gh.getStatus().success(function(status) {
        _this.github = status;
    });
}
