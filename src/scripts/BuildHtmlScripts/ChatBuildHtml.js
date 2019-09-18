// variable holding function to print message and sender username
const Chatinfo = {
    buildChatCard:(chatInput)=>{
        return `<article id="card-${chatInput.id}">${chatInput.user.username}: ${chatInput.message}</article>
        <button id="delete-message-${chatInput.id}">Delete</button><button id="edit-message-${chatInput.id}">Edit</button> `
    }};
export default Chatinfo;
