(function() {

	angular
		.module("tasks")
		.controller("AddTask", AddTask);

	function AddTask($state, initUsers, tasksSrv) {
		let $ctrl = this;

		init();

		/////
		function init() {
			$ctrl.newTask = {};
			$ctrl.users = initUsers;
			$ctrl.save = save;
			$ctrl.navigate = navigate;
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