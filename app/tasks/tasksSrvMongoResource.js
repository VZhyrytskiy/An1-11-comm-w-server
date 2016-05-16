(function() {
	"use strict";

	angular
		.module("tasks")
		.factory("TasksResource", TasksResource)
		.factory("tasksSrv", tasksSrv);

	function TasksResource() {
		
	}

	function tasksSrv() {
		return {
			getTaskById,
			getTasks,
			getUserTasks,
			createTask,
			deleteTask,
			updateTask,
		};

		// private functions
		function sendResponseData(response) {
			return response.data;
		}

		function getId(data) {
			return data._id.$oid;
		}

		/////
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