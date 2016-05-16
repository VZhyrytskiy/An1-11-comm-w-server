(function() {

	angular
		.module("tasks")
		.controller("addTask", addTask);

	function addTask($state, initUsers, tasksSrv) {
		let vm = this;

		init();

		/////
		function init() {
			vm.newTask = {};
			vm.users = initUsers;
			vm.save = save;
			vm.navigate = navigate;
		}

		function save(newTask) {
			tasksSrv.createTask(newTask)
				.then( () => $state.go("home") )
				.catch( (error) => console.log(error) );
		}

		function navigate(toState) {
			$state.go(toState);
		} 
	}

})();