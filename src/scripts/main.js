import registerClickEvents from "./ClickEvents/UsersRegisterClicks.js"
import newsClickEvents from "./ClickEvents/NewsClicks.js"
registerClickEvents.createAccount()
import renderChat from "../scripts/domPrinter/ChatPrinter.js"
import apiChat from "../scripts/apiManagers/Chatapi.js"
import newsBuildHtml from "./BuildHtmlScripts/NewsBuildHtml.js";
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

newsBuildHtml.mainNews();
newsClickEvents.submitfunction();
