(function() {

	angular
		.module("app")
		.config(configAppRouter);

	function configAppRouter($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "./tasks/task-list.html",
				controller: "TaskList",
				controllerAs: "$ctrl",
				resolve: {
					initData: function(tasksSrv) {
						return tasksSrv.getTasks()
								.catch(function(error) {
									console.log(error)
								});
					}
				}
			})
			.state("addTask", {
				url: "/addTask",
				templateUrl: "./tasks/add-task.html",
				controller: "AddTask",
				controllerAs: "$ctrl",
				resolve: {
					initUsers: function(usersSrv) {
						return usersSrv.getUsers()
								.catch(function(error) {
									console.log(error);
								});
					}
				}
			})
			.state("editTask", {
				url: "/editTask/:id",
				templateUrl: "./tasks/add-task.html",
				controller: "EditTask",
				controllerAs: "$ctrl",
				resolve: {
					initData: function($stateParams, tasksSrv) {
						return tasksSrv.getTaskById($stateParams["id"])
								.catch(function(error) {
									console.log(error);
								});
					},
					initUsers: function(usersSrv) {
						return usersSrv.getUsers()
								.catch(function(error) {
									console.log(error);
								});
					}
				}
			})
			.state("users", {
				url: "/users",
				templateUrl: "./users/user-list.html",
				controller: "UserList",
				controllerAs: "$ctrl"
			})
			.state("userTasks", {
				url: "/userTasks/:userId",
				templateUrl: "./user-tasks/user-task-list.html",
				controller: "UserTaskList",
				controllerAs: "$ctrl"
			})
			.state("editUser", {
				url: "/editUser",
				templateUrl: "./users/edit-user.html",
				controller: "EditUser",
				controllerAs: "$ctrl"
			})
			.state("addUser", {
				abstract: true,
				url: "/addUser",
				templateUrl: "./users/add-user.html",
				controller: "AddUser",
				controllerAs: "$ctrl"
			})
				.state("addUser.General", {
					url: "/General",
					templateUrl: "./users/add-user-general.html",
					controller: "AddUserDetails",
					controllerAs: "$ctrl"
				})
				.state("addUser.Cost", {
					url: "/Cost",
					templateUrl: "./users/add-user-cost.html",
					controller: "AddUserDetails",
					controllerAs: "$ctrl"
				})
				.state("addUser.Notes", {
					url: "/Notes",
					templateUrl: "./users/add-user-notes.html",
					controller: "AddUserDetails",
					controllerAs: "$ctrl"
				});

		$urlRouterProvider.otherwise("/");

		$locationProvider
			.html5Mode({
				enabled: false,
				requireBase: false
			});
	}
})();
