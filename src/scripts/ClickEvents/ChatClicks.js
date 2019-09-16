import apiChat from "../apiManagers/Chatapi.js"
import renderChat from "../domPrinter/ChatPrinter.js";
// function to send new object to json and reprint all messages
function sendChatButtonFunction (){
document.querySelector("body").addEventListener("click", ()=>{
    // targets button id
    if (event.target.id.includes("Sendmsg")){
        // value of what a user types into chatroom
const chatinput = document.querySelector("#Chatinput").value;
console.log(chatinput)
// new message structure
const msgObject= {
    "message": chatinput,
    "userId": 3}
    // posts new message to json
apiChat.postOneMessage(msgObject)
// gets all messages and prints
.then(apiChat.getAllMessages)
// parses messages
.then(parsedMessages =>{
    renderChat.buildChatCard(parsedMessages)})
}})}
export default sendChatButtonFunction;
