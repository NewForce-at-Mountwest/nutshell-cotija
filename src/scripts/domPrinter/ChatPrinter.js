import Chatinfo from "../BuildHtmlScripts/ChatBuildHtml.js"
// variable holding function to loop through array and print to DOM
const renderChat = {
    buildChatCard:arrayParam => {
        document.querySelector("#chat").innerHTML = "";
        arrayParam.forEach(singlemessage=>
            {document.querySelector("#chat").innerHTML += Chatinfo.buildChatCard(singlemessage)})
    }
}
export default renderChat