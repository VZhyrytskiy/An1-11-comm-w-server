(function() {

	angular
		.module("users")
		.controller("UserList", UserList);

	UserList.$inject = ["$state", "usersSrv"];

	function UserList($state, usersSrv) {
		var $ctrl = this;

		init();

		/////
		function init() {
			$ctrl.navigate = navigate;

			usersSrv.getUsers()
				.then(getUsersSuccess)
				.catch(errorCallback)
				.finally(getUsersComplete);

			function getUsersSuccess(users) {
				$ctrl.users = users;
			}

			function errorCallback(errorMsg) {
				console.log("Error Message:" + errorMsg);
			}

			function getUsersComplete() {
				console.log("getUsers has completed");
			}
		}

		function navigate(toState) {
			$state.go(toState);
		}
	}

})();