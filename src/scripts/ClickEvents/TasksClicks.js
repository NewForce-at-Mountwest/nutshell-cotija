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
	}
};

export default taskClickEvents;
