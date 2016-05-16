(function() {
	"use strict";

	angular
		.module("userTasks")
		.controller("userTaskList", userTaskList);

	function userTaskList($stateParams, tasksSrv) {
		let vm = this;

		tasksSrv
			.getUserTasks($stateParams["userId"])
			.then( (data) => vm.tasks = data );
	}

})();