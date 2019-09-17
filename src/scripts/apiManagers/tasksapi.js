//API fetch calls for EVERYTHING!

const taskApiManager = {
	//get all the tasks from JSON and parse them to JS
	getTasks: () => {
		return fetch("http://localhost:3000/tasks?_expand=user").then(response =>
			response.json()
		);
	},
	createTask: taskToCreate =>
		//create one task and post it to the JSON server
		fetch("http://localhost:3000/tasks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(taskToCreate)
		}),
	deleteTask: id =>
		//delete one task from the JSON server
		fetch(`http://localhost:3000/tasks/${id}`, {
			method: "DELETE"
		}),
	getOneTask: id => {
		//fetch one task from the JSON server
		return fetch(`http://localhost:3000/tasks/${id}`).then(response =>
			response.json()
		);
	},
	editTask: (id, taskToEdit) =>
		//edit one task in the JSON server
		fetch(`http://localhost:3000/tasks/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(taskToEdit).then(response => response.json())
		})
};

export default taskApiManager;
