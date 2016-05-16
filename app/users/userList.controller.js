(function() {

	angular
		.module("users")
		.controller("userList", userList);

	userList.$inject = ["$state", "usersSrv"];

	function userList($state, usersSrv) {
		var vm = this;

		init();

		/////
		function init() {
			vm.navigate = navigate;

			usersSrv.getUsers()
				.then(getUsersSuccess)
				.catch(errorCallback)
				.finally(getUsersComplete);

			function getUsersSuccess(users) {
				vm.users = users;
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