var app = angular.module('angularQuickStart', ['ui.router']);

app.config([
	'$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

		$stateProvider
			.state('home', {
				url: '/home',
				controller: 'HomeCtrl',
				templateUrl: 'views/home.html'
			})
			.state('reports', {
				url: '/reports',
				controller: 'ReportsCtrl',
				templateUrl: 'views/reports.html'
			})
			.state('requests', {
				url: '/requests',
				controller: 'requestCtrl',
				templateUrl: 'views/requests.html'
			});
			
		$urlRouterProvider.otherwise(function($injector) {
			var $state = $injector.get("$state");
			$state.go("home");
		});

}]);