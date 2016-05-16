(function() {

	angular
		.module("tasks")
		.controller("taskList", taskList);

	function taskList($state, tasksSrv, initData) {
		let vm = this;
		
		init();

		/////
		function init() {
			vm.tasks = initData;
			vm.deleteTask = deleteTask;
			vm.navigate = navigate;
			vm.refreshTaskList = refreshTaskList;
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