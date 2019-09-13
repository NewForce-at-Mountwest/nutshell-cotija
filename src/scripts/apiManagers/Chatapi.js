const apiChat = {
    getAllMessages:()=>{
        return fetch("http://localhost:3000/Messages?_expand=User")
        .then(Response=>Response.json())
    },
    postOneMessage: MessageObject =>fetch("http://localhost:3000/Messages", {
        // Replace "url" with your API's URL
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(MessageObject)})
}
export default apiChat