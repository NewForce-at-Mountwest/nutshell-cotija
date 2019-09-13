import apiChat from "../apiManagers/Chatapi.js"
import renderChat from "../domPrinter/ChatPrinter.js";


function sendChatButtonFunction (){

document.querySelector("body").addEventListener("click", ()=>{
    if (event.target.id.includes("Sendmsg")){
const chatinput = document.querySelector("#Chatinput").value;
console.log(chatinput)
// const msgObject= {
//     "message": chatinput
// }
// apiChat.postOneMessage(msgObject)
// .then(apiChat.getAllMessages)
// .then(parsedMessages =>{
//     renderChat.buildChatCard(parsedMessages)
// })
}
})}
export default sendChatButtonFunction;
