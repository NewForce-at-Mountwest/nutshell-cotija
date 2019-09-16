// api manager to fetch all messages and post a new message to json
const apiChat = {
  getAllMessages: () => {
    return fetch("http://localhost:3000/Messages?_expand=user")
      .then(Response => Response.json())
  },
  postOneMessage: MessageObject => {
    return fetch("http://localhost:3000/Messages", {
      // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(MessageObject)
    })
  }
}
export default apiChat