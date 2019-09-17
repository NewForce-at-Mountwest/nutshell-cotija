import registerClickEvents from "./ClickEvents/UsersRegisterClicks.js"
import Login from "./ClickEvents/LoginClickEvents.js"
import sendChatButtonFunction from "./ClickEvents/ChatClicks.js"
import renderChat from "./domPrinter/ChatPrinter.js"
import apiChat from "./apiManagers/Chatapi.js"
registerClickEvents.createAccount()
Login.loginClickEvent()

apiChat.getAllMessages()
.then(parsedMessages=>{
    renderChat.buildChatCard(parsedMessages)})
// Prints chat input and button
document.querySelector("#chatroom").innerHTML+= `<fieldset>
<label for="chat">Chatroom</label>
<br>
<input type="text" name="chat" id="Chatinput">
</fieldset>
<button id="Sendmsg" type="submit">Send</button>`
// calls function to send a new message to json and reprint
sendChatButtonFunction()