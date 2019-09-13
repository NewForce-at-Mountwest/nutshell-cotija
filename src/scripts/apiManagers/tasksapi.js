const taskApiManager = {
	createTask: taskToCreate =>
		fetch("http://localhost:3000/Tasks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(taskToCreate)
		}),

	getAccount: id => {
		return fetch(`http://localhost:3000/Users/${id}`).then(response =>
			response.json()
		);
	},
	deleteTask: id =>
		fetch(`http://localhost:3000/Tasks${id}`, {
			method: "DELETE"
		}),
	getOneTask: id => {
		return fetch(`http://localhost:3000/Tasks${id}`).then(response =>
			response.json()
		);
	},
	editTask: (id, taskToEdit) =>
		fetch(`http://localhost:3000/Tasks${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(taskToEdit)
		})
};

export default taskApiManager;
