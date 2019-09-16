
// variable holding function to print message and sender username
const Chatinfo = {
    buildChatCard:(chatInput)=>{
        return `<article>${chatInput.message}--${chatInput.user.username}</article> `
    }
};
export default Chatinfo;
