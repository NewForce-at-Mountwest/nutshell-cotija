// <--- start of alex's code --- stay pretty bois --->

// <--- IMPORT API MANAGERS AND CLICK EVENTS --->
import taskApiManager from "./apiManagers/tasksapi.js";
import registerClickEvents from "./ClickEvents/UsersRegisterClicks.js";
import taskClickEvents from "./ClickEvents/TasksClicks.js";
import taskDomPrinter from "./domPrinter/TasksPrinters.js";

// <--- CLICK EVENT FOR REGISTERING ACCOUNTS --->
registerClickEvents.createAccount();

// <--- CLICK EVENTS FOR TASKS --->
taskClickEvents.buildTask();
taskClickEvents.deleteTask();
taskClickEvents.checkTask();

// <--- CLICK EVENT FOR PRINTING TASKS TO DOM --->
taskApiManager.getTasks().then(parsedTasks => {
	taskDomPrinter.printTasks(parsedTasks);
});

// <--- end of alex's code beep boop --->
import Login from "../scripts/ClickEvents/LoginClickEvents.js";
// brings all messages to the DOM

Login.loginClickEvent();
