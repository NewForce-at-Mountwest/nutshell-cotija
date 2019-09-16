import taskDomPrinter from "../domPrinter/TasksPrinters.js";
import taskApiManager from "../apiManagers/tasksapi.js";

const taskClickEvents = {
	buildTask: () => {
		document
			.querySelector("#create-task-button")
			.addEventListener("click", function() {
				const taskToCreate = {
					userId: parseInt(localStorage.getItem("activeUser")),
					task: document.querySelector("#create-task-input").value
				};
				taskApiManager.createTask(taskToCreate);
				document.querySelector("#create-task-input").value = "";
			});
	},
	deleteTask: () => {
		document.querySelector("body").addEventListener("click", function() {
			if (event.target.id.includes("delete-task")) {
				const taskToDelete = event.target.id.split("-")[2];
				taskApiManager
					.deleteTask(taskToDelete)
					.then(taskApiManager.getTasks)
					.then(parsedTasks => {
						taskDomPrinter.printTasks(parsedTasks);
					});
			}
		});
	}
};

export default taskClickEvents;
