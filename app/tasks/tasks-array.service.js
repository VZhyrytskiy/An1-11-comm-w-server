(function() {

	angular
		.module("tasks")
		.factory("tasksSrv", tasksSrv);

	function tasksSrv($http, $q, $timeout) {

		return {
			getTasks,
			getUserTasks,
			createTask
		};

		function getTasks() {
			let dfd = $q.defer();

			$http
				.get("./data/tasks.json")
				.then( (response) => {
					// эмуляция задержки запроса
					$timeout( () => {
						dfd.resolve(response.data);
					}, 0);
				})
				.catch( () => {
					console.log("Error");
					dfd.reject("Error");
				});

			return dfd.promise;
		}

		function getUserTasks(userId) {
			let dfd = $q.defer();

			$http
				.get("./data/tasks.json")
				.then( (response) => {
					let tasks = response.data;
					let userTasks = tasks.filter( (task) => task.userId == userId ? true : false );
					dfd.resolve(userTasks);
				})
				.catch( () => dfd.reject("Error") );

			return dfd.promise;
		}

		function createTask(task) {
			// it is not correct to work with file
			return $http
				.post("./data/tasks.json", task)
				.then( () => console.log("Task has been saved") );
		}


	}

})();