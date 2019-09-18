// <--- IMPORT API MANAGER AND DOMPRINTER FUNCTION --->
import taskDomPrinter from "../domPrinter/TasksPrinters.js";
import taskApiManager from "../apiManagers/tasksapi.js";
// <--- TASK CLICK EVENTS --->
const taskClickEvents = {
	// <--- FUNCTION TO BUILD TASK --->
	buildTask: () => {
		// <--- SELECT CREATE TASK BUTTON AND CREATE CLICK EVENT --->
		const userId = sessionStorage.getItem("activeUser");
		taskApiManager
			.getTasks(userId)
			.then(parsedTasks => {
				taskDomPrinter.printTasks(parsedTasks);
			})
			.then(() => {
				document.querySelector("body").addEventListener("click", function() {
					taskClickEvents.editTask();
				});
			});
		document
			.querySelector("#create-task-button")
			.addEventListener("click", function() {
				// <--- CREATE OBJECT TO STORE IN THE JSON AND STORE IT IN A VARIABLE --->
				const taskToCreate = {
					userId: parseInt(localStorage.getItem("activeUser")),
					task: document.querySelector("#create-task-input").value,
					completionDate: document.querySelector("#task-completion-date").value,
					completed: false
				};
				// <--- CALL THE API MANAGER FUNCTION AND POST THE OBJECT TO THE JSON --->
				taskApiManager
					.createTask(taskToCreate)
					.then(taskApiManager.getTasks)
					.then(parsedTasks => {
						taskDomPrinter.printTasks(parsedTasks);
						// <--- RESET THE VALUE OF THE INPUT--->
						document.querySelector("#create-task-input").value = "";
					});
			});
	},
	// <--- FUNCTION TO DELETE TASK --->
	deleteTask: () => {
		// <--- SELECT DELETE TASK BUTTON AND CREATE CLICK EVENT --->
		document.querySelector("body").addEventListener("click", function() {
			if (event.target.id.includes("delete-task-button")) {
				// <--- SELECT CORRECT ID OF JSON ENTRY TO DELETE AND STORE IT IN A VARIABLE --->
				const taskToDelete = event.target.id.split("-")[3];
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
	// <--- FUNCTION TO EDIT TASK --->
	editTask: () => {
		// <--- SELECT DELETE TASK BUTTON AND CREATE CLICK EVENT --->
		if (event.target.id.includes("edit-task-button")) {
			// <--- SELECT CORRECT ID OF JSON ENTRY TO DELETE AND STORE IT IN A VARIABLE --->
			const idToGet = event.target.id.split("-")[3];
			taskApiManager.getOneTask(idToGet).then(parsedTask => {
				taskDomPrinter.printTaskEditForm(parsedTask);
			});
		}
		if (event.target.id.includes("save-task-edit-")) {
			// Get the id of the thing we want to edit
			const idToGet = event.target.id.split("-")[4];

			// Get the value of the input
			const editedTaskValue = document.querySelector(
				`#edit-task-input-${idToGet}`
			).value;
			const editedCompletionDate = document.querySelector(
				`#edit-task-date-${idToGet}`
			).value;

			const editedTaskEntry = {
				userId: parseInt(localStorage.getItem("activeUser")),
				task: editedTaskValue,
				completionDate: editedCompletionDate,
				completed: false
			};
			taskApiManager.editTask(idToGet, editedTaskEntry).then(() => {
				taskApiManager.getTasks().then(allTasks => {
					taskDomPrinter.printTasks(allTasks);
				});
			});
		}
	},
	checkTask: () => {
		document.querySelector("body").addEventListener("click", function() {
			if (event.target.id.includes("task-checkbox")) {
				const idToGet = event.target.id.split("-")[2];
				console.log(idToGet);
				debugger;
				taskApiManager.markAsComplete(idToGet).then(() => {
					taskApiManager.getTasks().then(allTasks => {
						taskDomPrinter.printTasks(allTasks);
					});
				});
			}
		});
	}
};

export default taskClickEvents;
