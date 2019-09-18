// api manager to fetch all messages and post a new message to json
const apiChat = {
  getOneMessage:messageID=>{
    return fetch(`http://localhost:3000/messages/${messageID}`).then
    (Response => Response.json())
  },
  getAllMessages: () => {
    return fetch("http://localhost:3000/messages?_expand=user")
      .then(Response => Response.json())
  },
  postOneMessage: MessageObject => {
    return fetch("http://localhost:3000/messages", {
      // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(MessageObject)
    })
  },
  deleteOneMessage: (idofDeleteMessage) => fetch(`http://localhost:3000/messages/${idofDeleteMessage}`,{
    method:"DELETE"
  }),
  editOneMessage:(idofEditMessage, MessageObject) => fetch(`http://localhost:3000/message/${idofEditMessage}`,{
    method:"PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(MessageObject)
  })
}
export default apiChat