(function() {

	angular
		.module("tasks")
		.controller("EditTask", EditTask);

	function EditTask($state, initData, initUsers, tasksSrv) {
		let $ctrl = this;

		init();

		/////
		function init() {
			$ctrl.newTask = initData;
			$ctrl.users = initUsers;
			$ctrl.save = save;
			$ctrl.navigate = navigate;
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