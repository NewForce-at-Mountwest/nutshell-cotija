// <--- IMPORT API MANAGER AND DOMPRINTER FUNCTION --->
import taskDomPrinter from "../domPrinter/TasksPrinters.js";
import taskApiManager from "../apiManagers/tasksapi.js";
// <--- TASK CLICK EVENTS --->
const taskClickEvents = {
	// <--- FUNCTION TO BUILD TASK --->
	buildTask: () => {
		// <--- SELECT CREATE TASK BUTTON AND CREATE CLICK EVENT --->
		document
			.querySelector("#create-task-button")
			.addEventListener("click", function() {
				// <--- CREATE OBJECT TO STORE IN THE JSON AND STORE IT IN A VARIABLE --->
				const taskToCreate = {
					userId: parseInt(localStorage.getItem("activeUser")),
					task: document.querySelector("#create-task-input").value
				};
				// <--- CALL THE API MANAGER FUNCTION AND POST THE OBJECT TO THE JSON --->
				taskApiManager.createTask(taskToCreate);
				// <--- RESET THE VALUE OF THE INPUT--->
				document.querySelector("#create-task-input").value = "";
			});
	},
	// <--- FUNCTION TO DELETE TASK --->
	deleteTask: () => {
		// <--- SELECT DELETE TASK BUTTON AND CREATE CLICK EVENT --->
		document.querySelector("body").addEventListener("click", function() {
			if (event.target.id.includes("delete-task")) {
				// <--- SELECT CORRECT ID OF JSON ENTRY TO DELETE AND STORE IT IN A VARIABLE --->
				const taskToDelete = event.target.id.split("-")[2];
				// <--- CALL THE API MANAGER FUNCTION TO DELETE ENTRY FROM THE JSON --->
				taskApiManager
					.deleteTask(taskToDelete)
					.then(taskApiManager.getTasks)
					.then(parsedTasks => {
						taskDomPrinter.printTasks(parsedTasks);
					});
			}
		});
	},
	editTask: () => {
		if (event.target.id.includes("edit-task")) {
			const idToGet = event.target.id.split("-")[2];
			taskApiManager.editTask(idToGet).then(parsedTask => {
				taskDomPrinter.printSingleTask(parsedTask);
			});
		}
		if (event.target.id.includes("save-task-edit-")) {
			// Get the id of the thing we want to edit
			const idToGet = event.target.id.split("-")[4];

			// Get the value of the input
			const editedTaskValue = document.querySelector(
				`#edit-task-input-${idToGet}`
            ).value;
            const editedTaskEntry = {
                task: editedTaskValue,
            };
		}
	}
};

export default taskClickEvents;
