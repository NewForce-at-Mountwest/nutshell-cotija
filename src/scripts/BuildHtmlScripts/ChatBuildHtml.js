
// variable holding function to print message and sender
const Chatinfo = {
    buildChatCard:(chatInput)=>{
        return `<article>${chatInput.message}--${chatInput.User.username}</article> `
    }
};
export default Chatinfo;
