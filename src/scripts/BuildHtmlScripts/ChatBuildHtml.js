// variable holding function to print message and sender username
const Chatinfo = {
    buildChatCard:(chatInput)=>{

        return `<article id="card-${chatInput.id}">${chatInput.user.username}: ${chatInput.message}</article>
        <button id="delete-message-${chatInput.id}">Delete</button><button id="edit-message-${chatInput.id}">Edit</button> `
    },
    buildEditMessageForm: (MessageToEdit)=>{

        return document.querySelector(`#card-${MessageToEdit.id}`).innerHTML = `<section>
        <input id ="message-${MessageToEdit.id}" type="text" value="${MessageToEdit.message}"><button id ="save-msg-${MessageToEdit.id}">Save</button></section>`
 } };
export default Chatinfo;
