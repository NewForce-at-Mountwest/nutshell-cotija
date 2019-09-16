import tasksHTML from "../BuildHtmlScripts/TasksBuildHtml.js";
//print cards to the DOM
const taskDomPrinter = {
	//function to loop over tasks and print them to the DOM
	printTasks: arrayOfTasks => {
		//select container to output to
		document.querySelector("#task-output").innerHTML = "";
		//empty string to build upon
		let tasksString = "";
		for (let i = 0; i < arrayOfTasks.length; i++) {
			tasksString += tasksHTML.buildTasks(arrayOfTasks[i]);
		}
		document.querySelector("#task-output").innerHTML += tasksString;
	},
	printSingleTask: singleTask => {
		//clear the container
		document.querySelector("#task-output").innerHTML = "";
		// Build HTML string for individual entry
		const tasksString = tasksHTML.buildTask(singleTask);
		// Add HTML string to DOM
		document.querySelector("#task-output").innerHTML += tasksString;
	}
};

export default taskDomPrinter;
