const taskApiManager = {
    getTasks: () => {
		return fetch("http://localhost:3000/tasks?_expand=user").then(response =>
			response.json()
		);
	},
	createTask: taskToCreate =>
		fetch("http://localhost:3000/tasks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(taskToCreate)
		}),
	deleteTask: id =>
		fetch(`http://localhost:3000/tasks/${id}`, {
			method: "DELETE"
		}),
	getOneTask: id => {
		return fetch(`http://localhost:3000/tasks/${id}`).then(response =>
			response.json()
		);
	},
	editTask: (id, taskToEdit) =>
		fetch(`http://localhost:3000/tasks/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(taskToEdit)
		})
};

export default taskApiManager;
