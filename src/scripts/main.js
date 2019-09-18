import newsClickEvents from "./ClickEvents/NewsClicks.js"
import newsBuildHtml from "./BuildHtmlScripts/NewsBuildHtml.js";
import Event from "../scripts/ClickEvents/EventsClicks.js"
// import apiNews from "./apiManagers/Newsapi.js";
// import printNewsToDom from "./domPrinter/NewsPrinter.js"


// brings all messages to the DOM
apiChat.getAllMessages()
.then(parsedMessages=>{
    renderChat.buildChatCard(parsedMessages)
})
// Prints chat input and button
document.querySelector("#chatroom").innerHTML+= `<fieldset>
<label for="chat">Chatroom</label>
<br>
<input type="text" name="chat" id="Chatinput">
</fieldset>
<button id="Sendmsg" type="submit">Send</button>`

newsBuildHtml.mainNews();
newsClickEvents.submitfunction();
newsClickEvents.deleteButtonFunction();
newsClickEvents.editButtonFunction();
newsClickEvents.saveButtonFunction();




// sendChatButtonFunction()
// <button id="Send" type="submit">Send</button>
// <button id="Sendmsg" type="submit">Send</button>;`
// // calls function to send a new message to json and reprint

sendChatButtonFunction()

// import Login from "../scripts/ClickEvents/LoginClickEvents.js"

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

import sendChatButtonFunction from "./ClickEvents/ChatClicks.js";
import renderChat from "../scripts/domPrinter/ChatPrinter.js";
import apiChat from "../scripts/apiManagers/Chatapi.js";
import Login from "../scripts/ClickEvents/LoginClickEvents.js";
// brings all messages to the DOM
apiChat.getAllMessages().then(parsedMessages => {
	renderChat.buildChatCard(parsedMessages);
});
document.querySelector("#chatroom").innerHTML += `<fieldset>
<label for="chat">Chatroom</label>
<br>
<input type="text" name="chat" id="Chatinput">
</fieldset>
<button id="Send" type="submit">Send</button>
<button id="Sendmsg" type="submit">Send</button>;`;
// calls function to send a new message to json and reprint
sendChatButtonFunction();
Login.loginClickEvent();
