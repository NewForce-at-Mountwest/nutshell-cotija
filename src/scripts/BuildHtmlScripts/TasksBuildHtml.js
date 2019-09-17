//build card that will be used for printing tasks
const tasksHTML = {
	//function for building task card
	buildTasks: taskObject => {
		//html string of the card itself
		return `
        <section class="task-card" id="task-card-${taskObject.id}">
          <h3><b>${taskObject.user.username}</b></h3>
            <p>${taskObject.task}</p>
                <button id="edit-task-button-${taskObject.id}">Edit</button>
                <button id="delete-task-button-${taskObject.id}">Delete</button>
        </section>
                `;
	},
	editSingleTask: taskObject => {
		const targetCard = document.querySelector(`#task-card-${taskObject.id}`);
		targetCard.innerHTML += `
          <section>
          <h5>Edit Entry</h5>
          <input id="edit-task-input-${taskObject.id}" type="text" value="${taskObject.task}">
		  <button id="save-task-edit-button-${taskObject.id}">Save</button>
		</section>`;
	}
};

export default tasksHTML;
