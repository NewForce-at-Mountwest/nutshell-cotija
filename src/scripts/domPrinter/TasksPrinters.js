import tasksHTML from "../BuildHtmlScripts/TasksBuildHtml.js"

const taskDomPrinter = {
	printTasks: arrayOfTasks => {
		document.querySelector("#task-output").innerHTML = "";
		let tasksString = "";
		for (let i = 0; i < arrayOfTasks.length; i++) {
			tasksString += tasksHTML.buildTask(arrayOfTasks[i])
		  }
		  document.querySelector("#task-output").innerHTML += tasksString
	},
}

export default taskDomPrinter