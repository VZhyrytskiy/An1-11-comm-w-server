(function() {

	angular
		.module("users")
		.factory("usersSrv", usersSrv);

	function usersSrv($http, $q, constants) {
		return {
			getUsers
		};
		
		/////
		function getUsers() {
			return $http({
					method: "GET",
					url: "./data/users.json",
					headers: {
						"TaskManager-Version": constants.APP_VERSION
					}
				})
				.then(sendResponseData)
				.catch(sendResponseError);

			function sendResponseData(response) {
				return response.data
			}

			function sendResponseError(response) {
				return $q.reject(`Error retriving user(s). (HTTP status:  ${response.status} )`);
			}
		}
	}
	
})();