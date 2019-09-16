// <--- CLICK EVENT FOR REGISTERING ACCOUNTS ---> //

import registerClickEvents from "./ClickEvents/UsersRegisterClicks.js";
import taskClickEvents from "./ClickEvents/TasksClicks.js";
import taskDomPrinter from "./domPrinter/TasksPrinters.js";

import sendChatButtonFunction from "./ClickEvents/ChatClicks.js";
import taskApiManager from "./apiManagers/tasksapi.js";
registerClickEvents.createAccount();
taskClickEvents.buildTask();
taskClickEvents.deleteTask()

taskApiManager.getTasks().then(parsedTasks => {
	taskDomPrinter.printTasks(parsedTasks);
});


// <--- CLICK EVENT FOR CHAT STUFF ---> //

// import renderChat from "../scripts/domPrinter/ChatPrinter.js"
// import apiChat from "../scripts/apiManagers/Chatapi.js"
// apiChat.getAllMessages()
// .then(parsedMessages=>{
//     renderChat.buildChatCard(parsedMessages)
// })
document.querySelector("#chatroom").innerHTML += `<fieldset>
<label for="chat">Chatroom</label>
<br>
<input type="text" name="chat" id="Chatinput">
</fieldset>
<button id="Sendmsg" type="submit">Send</button>`;

sendChatButtonFunction();
