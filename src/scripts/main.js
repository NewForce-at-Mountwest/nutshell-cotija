import newsClickEvents from "./ClickEvents/NewsClicks.js"
import newsBuildHtml from "./BuildHtmlScripts/NewsBuildHtml.js";
newsBuildHtml.mainNews();
newsClickEvents.submitfunction();
newsClickEvents.deleteButtonFunction();
newsClickEvents.editButtonFunction();
newsClickEvents.saveButtonFunction();
// <--- start of alex's code --- stay pretty bois --->
// <--- IMPORT API MANAGERS AND CLICK EVENTS --->
import registerClickEvents from "./ClickEvents/UsersRegisterClicks.js";
import taskClickEvents from "./ClickEvents/TasksClicks.js";
// <--- CLICK EVENT FOR REGISTERING ACCOUNTS --->
registerClickEvents.createAccount();
// <--- CLICK EVENTS FOR TASKS --->
taskClickEvents.buildTask();
taskClickEvents.deleteTask();
taskClickEvents.checkTask();
// <--- end of alex's code beep boop --->
import Login from "../scripts/ClickEvents/LoginClickEvents.js";
Login.loginClickEvent();
