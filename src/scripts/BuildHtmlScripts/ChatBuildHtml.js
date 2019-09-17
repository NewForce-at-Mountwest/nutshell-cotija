// variable holding function to print message and sender username
const Chatinfo = {
    buildChatCard:(chatInput)=>{
        return `<article>${chatInput.user.username}: ${chatInput.message}</article> `
    }};
export default Chatinfo;
