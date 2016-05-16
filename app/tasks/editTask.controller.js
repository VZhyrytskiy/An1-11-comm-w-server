(function() {

	angular
		.module("tasks")
		.controller("editTask", editTask);

	function editTask($state, initData, initUsers, tasksSrv) {
		let vm = this;

		init();

		/////
		function init() {
			vm.newTask = initData;
			vm.users = initUsers;
			vm.save = save;
			vm.navigate = navigate;
		}

		function save(newTask) {
			tasksSrv.updateTask(newTask)
				.then( () => $state.go("home") )
				.catch( (error) => console.log(error) );
		}

		function navigate(toState) {
			$state.go(toState);
		}
	}
})();