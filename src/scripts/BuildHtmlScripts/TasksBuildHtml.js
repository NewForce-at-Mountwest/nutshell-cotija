//build card that will be used for printing tasks
const tasksHTML = {
	//function for building task card
	buildTasks: taskObject => {
		//html string of the card itself
		return `
        <section class="task-card" id="task-card-${taskObject.id}">
                <br>
                <input type="checkbox" id="task-checkbox-${taskObject.id}"></input>
                <p id="task-object-thing">${taskObject.task}</p>
                <p id="task-date-thing">Expected Completion: ${taskObject.completionDate}</p>
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
          <textarea name="editInput" id="edit-task-input-${taskObject.id}" type="text" value="${taskObject.task}" cols="30" rows="5">${taskObject.task}</textarea>
          <input id="edit-task-date-${taskObject.id}" type="date" value="${taskObject.completionDate}">
		  <button id="save-task-edit-button-${taskObject.id}">Save</button>
		</section>`;
	}
};

export default tasksHTML;
