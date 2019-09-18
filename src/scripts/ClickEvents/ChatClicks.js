import apiChat from "../apiManagers/Chatapi.js"
import renderChat from "../domPrinter/ChatPrinter.js";
import Chatinfo from "../BuildHtmlScripts/ChatBuildHtml.js"
// function to send new object to json and reprint all messages
const ChatButtons = {
    sendChatButton: () => {
        return document.querySelector("body").addEventListener("click", () => {
            // targets button id
            if (event.target.id.includes("Sendmsg")) {
                document.querySelector("#chat").innerHTML =""
                // value of what a user types into chatroom
                const chatinput = document.querySelector("#Chatinput").value;
                console.log(chatinput)
                // new message structure
                const msgObject = {
                    "message": chatinput,
                    "userId": localStorage.getItem("userId")
                }
                // posts new message to json
                apiChat.postOneMessage(msgObject)
                    // gets all messages and prints
                    .then(apiChat.getAllMessages)
                    // parses messages
                    .then(parsedMessages => {
                        renderChat.buildChatCard(parsedMessages)
                    })
            }
        })
    },
    deleteChatMessage: () => {
        return document.querySelector("#chat").addEventListener("click", () => {
            if (event.target.id.includes("delete-message")) {
                const deleteMsgId = event.target.id.split("-")[2]
                apiChat.deleteOneMessage(deleteMsgId)
                    .then(() => {
                        apiChat.getAllMessages()
                            .then(parsedMessages => {
                                renderChat.buildChatCard(parsedMessages);
                            })
                    })
            }
        })
    },
    editChatMessage: () => {
        return document.querySelector("#chat").addEventListener("click", () => {

            if (event.target.id.includes("edit-message")) {
                console.log("youve clicked edit")
                const editMsgId = event.target.id.split("-")[2]
                console.log(editMsgId)
                debugger
                apiChat.getOneMessage(editMsgId)
                    .then(singleMessage => {
                        Chatinfo.buildEditMessageForm(singleMessage)
                    })
            }
        })
    },
    saveChatMessage: () => {
        return document.querySelector("#chat").addEventListener("click", () => {
            if (event.target.id.includes("save-msg")) {
                console.log("Click Save")
                const saveMsgId = event.target.id.split("-")[2];
                debugger
                const editedMsg = document.querySelector(`#message-${saveMsgId}`).value;
                const editedMsgObject = {
                    "message": editedMsg,
                    "userId": localStorage.getItem("userId")
                }
                apiChat.editOneMessage(saveMsgId, editedMsgObject)
                    .then(() => {
                        apiChat.getAllMessages()

                            .then(parsedMessages => {
                                console.log("parsed messages", parsedMessages)
                                debugger
                                renderChat.buildChatCard(parsedMessages);
                            })
                    })
            }
        })
    }
}
export default ChatButtons
