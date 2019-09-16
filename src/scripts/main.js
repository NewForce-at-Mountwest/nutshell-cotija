import registerClickEvents from "./ClickEvents/UsersRegisterClicks.js"
import sendChatButtonFunction from "./ClickEvents/ChatClicks.js"
import renderChat from "../scripts/domPrinter/ChatPrinter.js"
import apiChat from "../scripts/apiManagers/Chatapi.js"
import Login from "../scripts/ClickEvents/LoginClickEvents.js"


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
<button id="Send" type="submit">Send</button>
<button id="Sendmsg" type="submit">Send</button>;`
// calls function to send a new message to json and reprint

sendChatButtonFunction()
registerClickEvents.createAccount()
Login.loginClickEvent()


