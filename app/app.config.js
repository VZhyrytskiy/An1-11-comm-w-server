(function() {

	angular
		.module("app")
		.config(configAppRouter);

	function configAppRouter($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "./tasks/taskList.html",
				controller: "taskList",
				controllerAs: "vm",
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
				templateUrl: "./tasks/addTask.html",
				controller: "addTask",
				controllerAs: "vm",
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
				templateUrl: "./tasks/addTask.html",
				controller: "editTask",
				controllerAs: "vm",
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
				templateUrl: "./users/userList.html",
				controller: "userList",
				controllerAs: "vm"
			})
			.state("userTasks", {
				url: "/userTasks/:userId",
				templateUrl: "./userTasks/userTaskList.html",
				controller: "userTaskList",
				controllerAs: "vm"
			})
			.state("editUser", {
				url: "/editUser",
				templateUrl: "./users/editUser.html",
				controller: "editUser",
				controllerAs: "vm"
			})
			.state("addUser", {
				abstract: true,
				url: "/addUser",
				templateUrl: "./users/addUser.html",
				controller: "addUser",
				controllerAs: "vm"
			})
				.state("addUser.General", {
					url: "/General",
					templateUrl: "./users/addUserGeneral.html",
					controller: "addUserDetails",
					controllerAs: "vm"
				})
				.state("addUser.Cost", {
					url: "/Cost",
					templateUrl: "./users/addUserCost.html",
					controller: "addUserDetails",
					controllerAs: "vm"
				})
				.state("addUser.Notes", {
					url: "/Notes",
					templateUrl: "./users/addUserNotes.html",
					controller: "addUserDetails",
					controllerAs: "vm"
				});

		$urlRouterProvider.otherwise("/");

		$locationProvider
			.html5Mode({
				enabled: false,
				requireBase: true
			})
			.hashPrefix("!");
	}
})();