import registerClickEvents from "./ClickEvents/UsersRegisterClicks.js"

registerClickEvents.createAccount()
import renderChat from "../scripts/domPrinter/ChatPrinter.js"
import apiChat from "../scripts/apiManagers/Chatapi.js"
apiChat.getAllMessages()
.then(parsedMessages=>{
    renderChat.buildChatCard(parsedMessages)
})
document.querySelector("#chatroom").innerHTML+= `<fieldset>
<label for="chat">Chatroom</label>
<br>
<input type="text" name="chat" id="Chatinput">
</fieldset>
<button id="Send" type="submit">Send</button>`
