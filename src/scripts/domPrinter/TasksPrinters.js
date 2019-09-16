import tasksHTML from "../BuildHtmlScripts/TasksBuildHtml.js"
//print cards to the DOM
const taskDomPrinter = {
    //function to loop over tasks and print them to the DOM
	printTasks: arrayOfTasks => {
        //select container to output to
        document.querySelector("#task-output").innerHTML = "";
        //empty string to build upon
		let tasksString = "";
		for (let i = 0; i < arrayOfTasks.length; i++) {
			tasksString += tasksHTML.buildTask(arrayOfTasks[i])
		  }
		  document.querySelector("#task-output").innerHTML += tasksString
	},
}

export default taskDomPrinter