(function() {

	angular
		.module("tasks")
		.factory("tasksSrv", tasksSrv);

	function tasksSrv($http, $q, $timeout) {

		return {
			getTasks,
			getUserTasks,
			save
		};

		function getTasks() {
			let dfd = $q.defer();

			$http
				.get("./data/tasks.json")
				.success( (data, status, headers, config) => {
					// эмуляция задержки запроса
					$timeout( () => {
						dfd.resolve(data);
					}, 0);
				})
				.error( () => {
					console.log("Error");
					dfd.reject("Error");
				});

			return dfd.promise;
		}

		function getUserTasks(userId) {
			let dfd = $q.defer();

			$http
				.get("./data/tasks.json")
				.success( (tasks) => {
					let userTasks = tasks.filter( (task) => task.userId == userId ? true : false );
					dfd.resolve(userTasks);
				})
				.error( () => dfd.reject("Error") );

			return dfd.promise;
		}

		function save(task) {
			$http
				.post("./data/tasks.json", task)
				.success( () => console.log("Task has been saved") );
		}


	}

})();