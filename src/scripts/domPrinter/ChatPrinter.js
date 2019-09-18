import Chatinfo from "../BuildHtmlScripts/ChatBuildHtml.js"
// variable holding function to loop through array and print to DOM
const renderChat = {
    buildChatCard:arrayParam => {
        document.querySelector("#chat").innerHTML = "";
        arrayParam.forEach(singlemessage=>
            {document.querySelector("#chat").innerHTML += Chatinfo.buildChatCard(singlemessage)})
    },
    buildEditMessageForm: (MessageToEdit) => {
        const targetMessage = document.querySelector(`#card-${MessageToEdit.id}`)
        targetMessage.innerHTML = `<section>
        <input id ="message-${MessageToEdit.id}" type="text" value="${MessageToEdit.message}"></section><button id ="save-msg-${MessageToEdit.id}">Save</button>`
    }
}
export default renderChat