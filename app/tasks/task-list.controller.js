(function() {

	angular
		.module("tasks")
		.controller("TaskList", TaskList);

	function TaskList($state, tasksSrv, initData) {
		let $ctrl = this;
		
		init();

		/////
		function init() {
			$ctrl.tasks = initData;
			$ctrl.deleteTask = deleteTask;
			$ctrl.navigate = navigate;
			$ctrl.refreshTaskList = refreshTaskList;
		}

		function deleteTask(taskToDelete) {
			tasksSrv.deleteTask(taskToDelete)
				.then( () => $state.reload() )
				.catch( (error) => console.log(error) );
		}

		function navigate(toState) {
			$state.go(toState);
		}

		function refreshTaskList() {
			$state.reload();
		}
	}
})();