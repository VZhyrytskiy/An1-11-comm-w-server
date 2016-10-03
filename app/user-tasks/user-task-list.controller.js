(function() {
	"use strict";

	angular
		.module("userTasks")
		.controller("UserTaskList", UserTaskList);

	function UserTaskList($stateParams, tasksSrv) {
		let $ctrl = this;

		tasksSrv
			.getUserTasks($stateParams["userId"])
			.then( (data) => $ctrl.tasks = data );
	}

})();