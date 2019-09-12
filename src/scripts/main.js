import renderChat from "../scripts/domPrinter/ChatPrinter.js"
import apiChat from "../scripts/apiManagers/Chatapi.js"
apiChat.getAllMessages()
.then(parsedMessages=>{
    renderChat.buildChatCard(parsedMessages)
})
