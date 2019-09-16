//build card that will be used for printing tasks
const taskHTML = {
    //function for building task card
	buildTask: taskObject => {
        //html string of the card itself
        return `
        <section class="task-card" id="task-card-${taskObject.id}">
          <h3><b>${taskObject.user.username}</b></h3>
            <p>${taskObject.task}</p>
                <button id="edit-task-${taskObject.id}">Edit</button>
                <button id="delete-task-${taskObject.id}">Delete</button>
        </section>
                `
    }}

    export default taskHTML