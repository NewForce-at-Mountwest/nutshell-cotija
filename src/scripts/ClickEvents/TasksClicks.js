// <--- IMPORT API MANAGER AND DOMPRINTER FUNCTION --->
import taskDomPrinter from "../domPrinter/TasksPrinters.js";
import taskApiManager from "../apiManagers/tasksapi.js";
// <--- TASK CLICK EVENTS --->
const taskClickEvents = {
	// <--- FUNCTION TO BUILD TASKS --->
	buildTask: () => {
		// <--- STORE ACTIVE USERID IN A VARIABLE --->
		const userId = localStorage.getItem("userId");
		// <--- RUN FUNCTION FROM APIMANAGER TO GET ALL TASKS RELATED TO USERID--->
		taskApiManager
			.getTasks(userId)
			.then(parsedTasks => {
				console.log(parsedTasks);
				// <--- PRINT ALL RELATED TASKS TO THE DOM--->
				taskDomPrinter.printTasks(parsedTasks);
			})
			.then(() => {
				document.querySelector("body").addEventListener("click", function() {
					taskClickEvents.editTask();
				});
			});
		// <--- SELECT CREATE TASK BUTTON AND CREATE CLICK EVENT --->
		document
			.querySelector("#create-task-button")
			.addEventListener("click", function() {
				// <--- CREATE OBJECT TO STORE IN THE JSON AND STORE IT IN A VARIABLE --->
				const taskToCreate = {
					userId: parseInt(localStorage.getItem("userId")),
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
		// <--- SELECT EDIT TASK BUTTON AND CREATE CLICK EVENT --->
		if (event.target.id.includes("edit-task-button")) {
			// <--- SELECT CORRECT ID OF JSON ENTRY TO EDIT AND STORE IT IN A VARIABLE --->
			const idToGet = event.target.id.split("-")[3];
			// <--- GET ONE TASK WITH APIMANAGER AND PRINT THE EDIT FORM --->
			taskApiManager.getOneTask(idToGet).then(parsedTask => {
				taskDomPrinter.printTaskEditForm(parsedTask);
			});
		}
		// <--- SELECT SAVE TASK BUTTON --->
		if (event.target.id.includes("save-task-edit-")) {
			// <--- SELECT CORRECT ID OF JSON ENTRY TO SAVE AND STORE IT IN A VARIABLE --->
			const idToGet = event.target.id.split("-")[4];

			// <--- GET THE VALUE OF THE TASK EDIT FIELD --->
			const editedTaskValue = document.querySelector(
				`#edit-task-input-${idToGet}`
			).value;
			// <--- GET THE VALUE OF THE COMPLETION EDIT FIELD --->
			const editedCompletionDate = document.querySelector(
				`#edit-task-date-${idToGet}`
			).value;

			// <--- STORE THE EDITED TASK IN AN OBJECT --->
			const editedTaskEntry = {
				userId: parseInt(localStorage.getItem("userId")),
				task: editedTaskValue,
				completionDate: editedCompletionDate,
				completed: false
			};
			// <--- USE APIMANAGER FUNCTION TO PUT EDITED OBJECT TO JSON --->
			taskApiManager.editTask(idToGet, editedTaskEntry).then(() => {
				// <--- FETCH AND PRINT ALL TASKS AGAIN TO REFRESH PAGE --->
				taskApiManager.getTasks().then(allTasks => {
					taskDomPrinter.printTasks(allTasks);
				});
			});
		}
	},
	// <--- FUNCTION TO ADD CLICK EVENT TO CHECKBOXES AND UPDATE COMPLETION STATUS TO TRUE --->
	checkTask: () => {
		// <--- SELECT BODY FOR GENERAL CLICK EVENT --->
		document.querySelector("body").addEventListener("click", function() {
			// <--- CLICK EVENT ACTIVATES ON CHECKBOX CLICK --->
			if (event.target.id.includes("task-checkbox")) {
				// <--- SELECT THE ID --->
				const idToGet = event.target.id.split("-")[2];
				// <--- PATCH BOOLEAN OF TRUE TO JSON SERVER --->
				taskApiManager.markAsComplete(idToGet).then(() => {
					// <--- FETCH AND PRINT ALL TASKS AGAIN TO REFRESH PAGE --->
					taskApiManager.getTasks().then(allTasks => {
						taskDomPrinter.printTasks(allTasks);
					});
				});
			}
		});
	}
};

export default taskClickEvents;
