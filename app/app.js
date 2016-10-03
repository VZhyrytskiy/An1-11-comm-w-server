(function() {
'use strict';

	angular.module("app", [
		"ui.router",
		"constants",

		// features
		"tasks",
		"users",
		"userTasks"
	]);

	angular.element(document).ready(() => {
		angular.bootstrap(document, ["app"]);
	});

})();



















