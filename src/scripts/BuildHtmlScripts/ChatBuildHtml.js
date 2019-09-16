
<<<<<<< HEAD
// variable holding function to print message and sender
// const Chatinfo = {
//     buildChatCard:(chatInput)=>{
//         return `<article>${chatInput.message}--${chatInput.users.username}</article> `
//     }
// };
// export default Chatinfo;
=======
// variable holding function to print message and sender username
const Chatinfo = {
    buildChatCard:(chatInput)=>{
        return `<article>${chatInput.message}--${chatInput.user.username}</article> `
    }
};
export default Chatinfo;
>>>>>>> master
