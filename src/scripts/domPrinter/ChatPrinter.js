import Chatinfo from "../BuildHtmlScripts/ChatBuildHtml.js"
const renderChat = {
    buildChatCard:arrayParam => {
        document.querySelector("#chat").innerHTML = "";
        arrayParam.forEach(singlemessage=>
            {document.querySelector("#chat").innerHTML += Chatinfo.buildChatCard(singlemessage)})
    }
}
export default renderChat