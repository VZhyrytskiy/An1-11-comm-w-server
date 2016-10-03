(function() {
	"use strict";

	angular
		.module("tasks")
		.config(configModule)
		.factory("tasksSrv", tasksSrv);

	
	function configModule() {
		
	}

	function tasksSrv() {
		return {
			getTaskById,
			getTasks,
			getUserTasks,
			createTask,
			deleteTask,
			updateTask
		};

		function sendResponseData(response) {
			return response.data;
		}


		function getTasks() {
			
		}


		function createTask(newTask) {
			
		}


		function deleteTask(taskToDelete) {
			
		}

		
		function getTaskById(taskId) {
			
		}


		function updateTask(taskToUpdate) {
			
		}


		function getUserTasks(userName) {
			
		}
	}

})();